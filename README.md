# Portfólio Pessoal

Portfólio desenvolvido como desafio técnico do processo seletivo da **Include Jr**, apresentando trajetória, hobbies, formação, experiências profissionais e projetos práticos.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

## Sobre o projeto

Este é o meu portfólio pessoal, desenvolvido como desafio técnico do processo seletivo da Include Jr, para apresentar minha trajetória como Desenvolvedor Full Stack, formação acadêmica, experiências profissionais e projetos práticos. O projeto foi construído com foco em três pilares: design responsivo, interatividade e identidade visual consistente, unindo uma stack moderna de frontend a componentes 3D e integrações externas.

## Funcionalidades

- **Dark / Light Mode** — alternância de tema persistida em localStorage, com paleta dedicada para cada modo e transições suaves em toda a interface
- **Design responsivo** — layout adaptado para desktop, tablet e mobile, incluindo menu lateral animado para telas pequenas
- **Animações e interatividade** — revelação de conteúdo ao rolar a página (Intersection Observer) e crachá 3D interativo na Hero (arrastável, com física de gravidade)
- **Integração com Spotify** — exibe as últimas músicas ouvidas em tempo real na seção de Hobbies
- **Performance** — animações otimizadas com aceleração via GPU e transições nativas em CSS

## Seções

| Seção | Descrição |
|---|---|
| Hero | Apresentação inicial com crachá 3D interativo |
| Sobre | Resumo pessoal, formação atual e objetivos |
| Hobbies | Espaço dinâmico com jogos favoritos, integração ao vivo com Spotify e clubes de futebol acompanhados |
| Jornada | Timeline unificando formação acadêmica e experiências profissionais |
| Certificados | Certificações complementares de cursos realizados |
| Skills | Stack técnica organizada por categoria (Frontend, Backend, Ferramentas, Metodologias) |
| Projetos | Aplicações reais desenvolvidas, do levantamento de requisitos ao deploy |

## Tecnologias utilizadas

### Frontend
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Lucide React (ícones)
- Three.js / React Three Fiber (crachá 3D interativo)

### Ferramentas & Integrações
- Spotify Web API (últimas músicas ouvidas)
- Context API (gerenciamento de tema)
- Intersection Observer API (animações de scroll)

## Arquitetura do projeto

```
src/
├── assets/              # Imagens, ícones e mídias estáticas
├── components/
│   ├── layout/           # Header e componentes estruturais
│   ├── sections/          # Seções da página (Hero, About, Hobbies, etc.)
│   └── ui/                # Componentes reutilizáveis (Lanyard)
├── constants/            # Dados estáticos por seção (projects, skills, hobbies...)
├── hooks/                # Hooks customizados (useTheme, ThemeProvider, useIntersectionObserver...)
├── types/                # Definições de tipos TypeScript
└── styles/               # Estilos globais e variáveis de tema
```

## Como rodar localmente

Pré-requisitos: Node.js 18+ e npm/yarn instalados.

```bash
# Clone o repositório
git clone https://github.com/DevVitorlevi/desafio-frontend-include-jr

# Acesse a pasta do projeto
cd desafio-frontend-include-jr

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

Build de produção:

```bash
npm run build
```

## Deploy

O projeto está hospedado na Railway e pode ser acessado em: https://desafio-frontend-include-jr-production.up.railway.app
