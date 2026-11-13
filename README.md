# Aprenda Fácil — Projetos de Extensão PEX I–V

<p align="center">
  <img src="logo-aprenda-facil.png" width="180" alt="Logo Aprenda Fácil">
</p>

<p align="center">
  <strong>Seu portal para aprendizado gratuito e acessível.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/projeto-acad%C3%AAmico-4776a8" alt="Projeto acadêmico">
  <img src="https://img.shields.io/badge/curso-An%C3%A1lise%20e%20Desenvolvimento%20de%20Sistemas-527a67" alt="Curso ADS">
  <img src="https://img.shields.io/badge/front--end-HTML%20%7C%20CSS%20%7C%20JavaScript-e6a34a" alt="HTML, CSS e JavaScript">
</p>

---

## Sobre este repositório

Este repositório reúne os materiais dos **Projetos de Extensão I a V (PEX I–V)** realizados durante a graduação em Análise e Desenvolvimento de Sistemas, além do código-fonte do portal web **Aprenda Fácil**.

O conteúdo registra diferentes etapas de um percurso acadêmico: a concepção de um portal educacional, os estudos de diagnóstico da Instituição Aurora (fictícia), a análise de dados e a apresentação de uma proposta de solução digital.

O repositório deve ser entendido como um conjunto de entregas acadêmicas e artefatos de desenvolvimento — não apenas como um único site.

## Portal Aprenda Fácil

O portal público apresenta uma proposta de apoio ao aprendizado gratuito e acessível, com conteúdos introdutórios e orientações de estudo.

**[Acessar o portal publicado](https://amanda-aandrade.github.io/aprenda-facil-pex/)**

### Páginas do portal

| Arquivo | Conteúdo |
|---|---|
| index.html | Página inicial, áreas de aprendizado, apresentação do projeto e acesso às demais seções |
| sobre.html | Objetivos, público-alvo, justificativa, tecnologias e relação com o PEX |
| cursos.html | Cards conceituais com temas introdutórios de HTML/CSS, JavaScript e lógica de programação |
| guia.html | Orientações de organização, rotina e técnicas de estudo, trilhas sugeridas e checklist |
| ebooks.html | Catálogo demonstrativo de materiais sugeridos para leitura complementar |
| documentacao.html | Documentação acadêmica com resumo, objetivos, escopo, metodologia, tecnologias e roadmap |
| perfil.html | Página demonstrativa de perfil e apresentação da jornada de aprendizagem |

### O que está implementado e o que é demonstrativo

O site é um front-end estático construído com HTML, CSS e JavaScript. Algumas áreas apresentam conceitos e interfaces planejadas, e não serviços completos:

- Os cards da página de cursos apresentam temas e conteúdos introdutórios; não representam uma plataforma de cursos com aulas, matrícula ou acompanhamento.
- Os botões dos materiais na página de e-books estão desabilitados nesta versão.
- A página de perfil é uma apresentação estática; não há autenticação, conta de usuário ou persistência de perfil.
- O formulário de busca aparece na interface, mas não possui lógica de pesquisa conectada nesta versão.
- O arquivo script.js implementa o comportamento do botão de voltar ao topo.
- Não há backend, banco de dados ou API integrados ao portal.

Essas distinções são importantes para demonstrar o estágio real do projeto sem atribuir funcionalidades que ainda não existem.

## Organização dos Projetos de Extensão

### PEX I — Aprenda Fácil

Etapa de concepção e desenvolvimento inicial do portal educacional, com foco em organizar conteúdos introdutórios e facilitar o acesso a materiais de estudo.

**Eixo apresentado no portal:** ODS 4 — Educação de Qualidade.

[Consultar documentação do PEX I](./pex-01/README.md)

### PEX II — Diagnóstico da Instituição Aurora

Estudo de uma instituição fictícia de acolhimento emocional, com identificação de situações-problema operacionais, tecnológicas e organizacionais. O trabalho registra desafios de organização de atendimentos, uso de processos manuais, segurança das informações e acesso ao acolhimento.

**Eixo do projeto:** ODS 3 — Saúde e Bem-estar.

[Consultar documentação do PEX II](./pex-02/README.md)

### PEX III — Análise e proposição de soluções

Aprofundamento do diagnóstico da Aurora, com análise de processos, riscos, requisitos e proposição conceitual de soluções digitais, como organização de informações, atendimento e ferramentas de apoio.

[Consultar documentação do PEX III](./pex-03/README.md)

### PEX IV — Coleta e análise de dados

Etapa dedicada à coleta, organização e análise de informações para apoiar o diagnóstico e a proposição de soluções tecnológicas. A documentação cita ferramentas como Google Forms, Trello e Excel.

[Consultar documentação do PEX IV](./pex-04/README.md)

### PEX V — Relato final e apresentação

Etapa de consolidação dos trabalhos anteriores, com relato, simulação de uso e apresentação de uma solução web. O documento do PEX V descreve o portal Aprenda Fácil como artefato de demonstração relacionado à proposta para a Instituição Aurora.

[Consultar documentação do PEX V](./pex-05/README.md)

## Relação entre os temas e os ODS

Os materiais reunidos neste repositório apresentam dois recortes temáticos que precisam ser lidos em seu contexto:

- **Portal Aprenda Fácil / PEX I:** a interface pública e suas páginas de apresentação relacionam o portal à educação e ao **ODS 4 — Educação de Qualidade**.
- **Documentação da Instituição Aurora / PEX II–V:** os relatórios tratam de uma instituição fictícia de acolhimento emocional e relacionam essa linha de trabalho ao **ODS 3 — Saúde e Bem-estar**.

O relatório do PEX V descreve o Aprenda Fácil como parte da apresentação da solução para a Aurora. Já o portal publicado atualmente apresenta conteúdos de apoio ao estudo e educação. A aplicação disponível não é um serviço de saúde, não oferece atendimento psicológico e não realiza gestão de pacientes.

## Tecnologias e ferramentas

### Utilizadas no portal

- **HTML5:** estrutura das páginas.
- **CSS3:** identidade visual, estilos, grid/flexbox e responsividade.
- **JavaScript:** interações simples do front-end, incluindo o botão de voltar ao topo.
- **Google Fonts (Poppins):** tipografia carregada externamente.

### Ferramentas e apoio ao desenvolvimento documentados

- Visual Studio Code.
- Git e GitHub.
- Canva e Miro para prototipação e organização visual.
- Google Forms, Trello e Excel nas atividades documentadas de coleta e organização de dados do PEX IV.

## Estrutura do repositório

~~~text
aprenda-facil-pex/
├── index.html
├── sobre.html
├── cursos.html
├── guia.html
├── ebooks.html
├── documentacao.html
├── perfil.html
├── style.css
├── script.js
├── logo-aprenda-facil.png
├── README.md
├── pex-01/
│   └── README.md
├── pex-02/
│   └── README.md
├── pex-03/
│   └── README.md
├── pex-04/
│   └── README.md
└── pex-05/
    └── README.md
~~~

Cada pasta PEX contém a documentação específica da respectiva etapa. Os relatórios e evidências associados estão referenciados nos READMEs das etapas quando aplicável.

## Como executar localmente

O portal é estático e não exige instalação de dependências via npm.

### 1. Clonar o repositório

~~~bash
git clone https://github.com/Amanda-AAndrade/aprenda-facil-pex.git
~~~

### 2. Entrar na pasta

~~~bash
cd aprenda-facil-pex
~~~

### 3. Iniciar um servidor local

**Windows (Python 3):**

~~~powershell
py -m http.server 5500
~~~

**Linux ou macOS (Python 3):**

~~~bash
python3 -m http.server 5500
~~~

### 4. Abrir no navegador

~~~text
http://localhost:5500
~~~

Também é possível abrir a pasta no Visual Studio Code e utilizar a extensão Live Server.

## Comandos úteis

Verificar alterações:

~~~bash
git status
~~~

Atualizar a cópia local:

~~~bash
git pull origin main
~~~

Registrar e enviar alterações:

~~~bash
git add .
git commit -m "docs: atualiza documentação do Aprenda Fácil"
git push origin main
~~~

Não é necessário executar npm install nesta versão.

## Publicação no GitHub Pages

O site está publicado pelo GitHub Pages:

**[Abrir Aprenda Fácil](https://amanda-aandrade.github.io/aprenda-facil-pex/)**

Para configurar ou revisar a publicação, acesse **Settings → Pages**, selecione **Deploy from a branch**, escolha main e a pasta raiz (/ root).

## Próximas evoluções técnicas

- [ ] Conectar a busca a uma lógica de pesquisa real.
- [ ] Substituir os cards conceituais por conteúdos e cursos efetivamente disponíveis.
- [ ] Disponibilizar os materiais de leitura e habilitar os respectivos links.
- [ ] Definir o escopo funcional da página de perfil antes de implementar autenticação.
- [ ] Avaliar requisitos de acessibilidade e aprimoramento da responsividade.
- [ ] Definir, caso faça sentido para o projeto, uma arquitetura de backend e persistência de dados.

## Autoria

**Amanda Andrade**  
Projeto desenvolvido no contexto da graduação em **Análise e Desenvolvimento de Sistemas**, como parte dos Projetos de Extensão I a V.

---

<p align="center"><strong>Aprenda Fácil — conhecimento acessível, um passo de cada vez.</strong></p>
