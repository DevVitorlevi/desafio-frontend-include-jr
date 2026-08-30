import { Certificate } from "@/types";
import CertificadoJS from "@/assets/certificado_js.jpg";
import CertificadoNext from "@/assets/certificado_next.jpg";
import CertificadoNode from "@/assets/certificado_node.jpg";
import CertificadoReact from "@/assets/certificado_react.jpg";

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "NextJS do zero ao avançado na pratica",
    description:
      "Curso prático de desenvolvimento web com React, Next.js e TypeScript, com foco em projetos reais, incluindo autenticação, integração de pagamentos, SSR/SSG e deploy na Vercel e Heroku.",
    image: CertificadoNext,
  },
  {
    id: 2,
    title: "JavaScript e TypeScript do básico ao avançado JS/TS",
    description:
      "Curso completo de JavaScript e TypeScript, do básico ao avançado, cobrindo front-end e back-end com foco em se tornar full stack. Aborda Node.js, Express, MongoDB, MySQL/MariaDB, React (básico e avançado com Hooks e Redux), Next.js com SSR/SSG/ISR, TypeScript, testes com Jest, princípios SOLID e design patterns. Inclui também deploy em servidor Linux, configuração de segurança, SSL e CI/CD, além de projetos práticos como um CRUD com autenticação e uma API REST completa.",
    image: CertificadoJS,
  },
  {
    id: 3,
    title: "React do Zero a Maestria",
    description:
      "Curso completo de React do básico ao avançado, começando pelos fundamentos (criação de projeto com Vite, JSX, componentização, CSS, formulários, requisições HTTP e Context API) e avançando até a integração com back-end. Ao longo do curso são desenvolvidos projetos práticos usando Node.js/Express, MongoDB com Mongoose e Firebase, além de bônus com criação de APIs, JavaScript moderno e TypeScript aplicado ao React. O foco é preparar o aluno para o mercado de trabalho, capacitando-o a criar aplicações completas com front-end, back-end, banco de dados, validações e autenticação.",
    image: CertificadoReact,
  },
  {
    id: 4,
    title: "NodeJS do Zero a Maestria",
    description:
      "Curso completo de Node.js, do zero ao avançado, cobrindo o ecossistema da tecnologia: Express, Handlebars, MongoDB/Mongoose (NoSQL), MySQL/Sequelize (SQL), padrão de arquitetura MVC e criação de APIs RESTful. O curso começa com Node puro para entender a fundo a runtime, avança para desenvolvimento web com Express e integração a bancos de dados, e depois aplica o padrão MVC para organizar aplicações maiores. Ao final, é desenvolvida uma aplicação completa com front-end separado do back-end, além de seções extras de reforço em HTML, CSS, SQL e NoSQL.",
    image: CertificadoNode,
  },
];
