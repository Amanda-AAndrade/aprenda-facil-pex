/* ============================================================
   APRENDA FÁCIL — INTERAÇÕES DO FRONT-END
   Recursos locais, sem dependência de backend.
   ============================================================ */
(() => {
  "use strict";

  // Menu responsivo
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector("#site-navigation");

  function closeMenu() {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    siteNav.classList.remove("is-open");
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      siteNav.classList.toggle("is-open", !isOpen);
    });

    siteNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  // Botão voltar ao topo — páginas sem esse botão não geram erro.
  const scrollTopButton = document.querySelector(".scroll-top");
  if (scrollTopButton) {
    const updateScrollButton = () => {
      scrollTopButton.classList.toggle("visible", window.scrollY > 300);
    };

    window.addEventListener("scroll", updateScrollButton, { passive: true });
    updateScrollButton();

    scrollTopButton.addEventListener("click", () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  // Ano do rodapé
  document.querySelectorAll("[data-current-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  // Busca local no catálogo de conteúdos do portal.
  const searchForm = document.querySelector("#site-search");
  const searchInput = document.querySelector("#q");
  const searchResults = document.querySelector("#search-results");

  const searchCatalog = [
    { title: "Fundamentos de HTML e CSS", page: "cursos.html", label: "Trilha introdutória", description: "Estrutura semântica, tags e primeiros estilos para páginas web.", keywords: "html css tags semantica estrutura web frontend" },
    { title: "Primeiros passos em JavaScript", page: "cursos.html", label: "Trilha introdutória", description: "Variáveis, tipos, condições, laços e funções básicas.", keywords: "javascript js variaveis tipos condicoes lacos funcoes programação" },
    { title: "Lógica de programação", page: "cursos.html", label: "Trilha introdutória", description: "Sequência de passos, algoritmos e resolução de problemas.", keywords: "logica algoritmo fluxograma raciocinio programação" },
    { title: "Organização da rotina de estudos", page: "guia.html", label: "Guia de estudos", description: "Como definir dias, horários e metas possíveis para estudar.", keywords: "organização rotina horario planejamento estudos" },
    { title: "Técnica Pomodoro", page: "guia.html", label: "Guia de estudos", description: "Ciclos de foco e pausas para organizar sessões de estudo.", keywords: "pomodoro foco tempo pausa 25 minutos produtividade" },
    { title: "Trilhas sugeridas de estudo", page: "guia.html", label: "Guia de estudos", description: "Caminhos de aprendizagem para iniciantes e pessoas em transição.", keywords: "trilhas caminhos iniciantes transicao carreira" },
    { title: "Checklist de estudos", page: "guia.html", label: "Ferramenta local", description: "Marque suas tarefas e acompanhe o progresso neste navegador.", keywords: "checklist tarefas progresso marcar estudo prática codigo" },
    { title: "Materiais de leitura complementar", page: "ebooks.html", label: "Materiais planejados", description: "Temas sugeridos para futura disponibilização de materiais.", keywords: "ebooks ebook pdf material leitura complementar" },
    { title: "Sobre o Aprenda Fácil e ODS 4", page: "sobre.html", label: "Sobre o projeto", description: "Objetivos, público-alvo, tecnologias e relação com Educação de Qualidade.", keywords: "sobre objetivo publico ods 4 educação qualidade projeto" },
    { title: "Documentação do projeto", page: "documentacao.html", label: "Documentação", description: "Escopo, metodologia, tecnologias, resultados e melhorias futuras.", keywords: "documentacao metodologia escopo requisitos tecnologia projeto" }
  ];

  const normalizeText = value => String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .trim();

  function renderSearchResults() {
    if (!searchResults || !searchInput) return;
    const term = normalizeText(searchInput.value);

    if (!term) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      return;
    }

    const matches = searchCatalog.filter(item =>
      normalizeText([item.title, item.description, item.keywords].join(" ")).includes(term)
    );

    searchResults.hidden = false;
    if (!matches.length) {
      searchResults.innerHTML = '<p class="search-empty">Não encontramos esse termo no conteúdo atual. Tente “HTML”, “JavaScript”, “lógica” ou “estudos”.</p>';
      return;
    }

    searchResults.innerHTML = matches.slice(0, 6).map(item => `
      <a class="search-result-item" href="${item.page}">
        <span class="search-result-label">${item.label}</span>
        <strong>${item.title}</strong>
        <span>${item.description}</span>
        <span class="search-result-link">Abrir página →</span>
      </a>
    `).join("");
  }

  if (searchForm && searchInput && searchResults) {
    searchForm.addEventListener("submit", event => {
      event.preventDefault();
      renderSearchResults();
      if (searchInput.value.trim()) searchResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    searchInput.addEventListener("input", renderSearchResults);
  }

  // Checklist com armazenamento local opcional.
  const checklist = document.querySelector("#study-checklist");
  if (checklist) {
    const storageKey = "aprenda-facil-checklist-v1";
    const checkboxes = [...checklist.querySelectorAll("[data-checklist-item]")];
    const progressFill = document.querySelector("#checklist-progress-fill");
    const progressLabel = document.querySelector("#checklist-progress-label");
    const progressBar = document.querySelector(".checklist-progress");
    const resetButton = document.querySelector("#reset-checklist");
    const printButton = document.querySelector("#print-checklist");

    let savedState = {};
    try {
      savedState = JSON.parse(localStorage.getItem(storageKey) || "{}") || {};
    } catch (error) {
      savedState = {};
    }

    checkboxes.forEach(input => {
      input.checked = savedState[input.dataset.checklistItem] === true;
      input.addEventListener("change", updateChecklist);
    });

    function updateChecklist() {
      const state = {};
      checkboxes.forEach(input => {
        state[input.dataset.checklistItem] = input.checked;
      });

      try {
        localStorage.setItem(storageKey, JSON.stringify(state));
      } catch (error) {
        // O checklist continua utilizável mesmo quando o armazenamento está indisponível.
      }

      const completed = checkboxes.filter(input => input.checked).length;
      const percent = checkboxes.length ? Math.round((completed / checkboxes.length) * 100) : 0;
      if (progressFill) progressFill.style.width = percent + "%";
      if (progressLabel) progressLabel.textContent = completed + " de " + checkboxes.length + " tarefas concluídas";
      if (progressBar) progressBar.setAttribute("aria-valuenow", String(completed));
    }

    if (resetButton) {
      resetButton.addEventListener("click", () => {
        checkboxes.forEach(input => { input.checked = false; });
        updateChecklist();
      });
    }

    if (printButton) {
      printButton.addEventListener("click", () => window.print());
    }

    updateChecklist();
  }
})();
