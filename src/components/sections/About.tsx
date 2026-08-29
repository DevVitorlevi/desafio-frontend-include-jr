import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const infoItems = [
  { label: "CARGO", value: "Desenvolvedor Full Stack" },
  { label: "CURSO", value: "Engenharia de Software" },
  { label: "FACULDADE", value: "Universidade Federal do Ceará" },
];

export function About() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col justify-center py-32 mt-20 max-sm:mt-0
        bg-[#f5f3ef] dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-20 max-lg:px-10">
        <div
          className="flex flex-col items-center gap-6 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            className="leading-none tracking-tight max-sm:text-5xl text-8xl font-light transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#4b4a47] dark:text-[#b6b4b4]"
          >
            Quem sou{" "}
            <span className="font-extrabold text-[#1c1c1c] dark:text-white">
              Eu?
            </span>
          </h2>
          <p
            className="max-w-lg text-md max-sm:text-[0.8rem] leading-normal transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#79766c] dark:text-[#565656]"
          >
            Um Desenvolvedor Full Stack que transforma requisitos complexos em
            aplicações escaláveis, seguras e de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <p
              className="text-md leading-[1.85] transition-colors duration-500
                font-['Plus_Jakarta_Sans',sans-serif]
                text-[#6b6a65] dark:text-[#615e5e]"
            >
              Sou{" "}
              <strong className="font-bold text-[#1c1c1c] dark:text-white">
                Vitor Levi
              </strong>{" "}
              Desenvolvedor Full Stack. Atualmente no primeiro semestre de
              Engenharia de Software na Universidade Federal do Ceará.
            </p>

            <p
              className="text-md leading-[1.85] transition-colors duration-500
                font-['Plus_Jakarta_Sans',sans-serif]
                text-[#6b6a65] dark:text-[#615e5e]"
            >
              Já atuei em projetos para organizações internacionais e aplicações
              governamentais, sempre focado em entregar soluções que geram
              impacto real e mensurável. Me especializo em construir aplicações
              completas com{" "}
              <strong className="font-bold text-[#3a3a35] dark:text-[#CCCCCC]">
                TypeScript
              </strong>
              ,{" "}
              <strong className="font-bold text-[#3a3a35] dark:text-[#CCCCCC]">
                Node.js
              </strong>
              ,{" "}
              <strong className="font-bold text-[#3a3a35] dark:text-[#CCCCCC]">
                React
              </strong>
              ,{" "}
              <strong className="font-bold text-[#3a3a35] dark:text-[#CCCCCC]">
                Next.js
              </strong>{" "}
              ,{" "}
              <strong className="font-bold text-[#3a3a35] dark:text-[#CCCCCC]">
                PostgreSQL
              </strong>{" "}
              e{" "}
              <strong className="font-bold text-[#3a3a35] dark:text-[#CCCCCC]">
                Docker
              </strong>
              .
            </p>

            <p
              className="text-md leading-[1.85] transition-colors duration-500
                font-['Plus_Jakarta_Sans',sans-serif]
                text-[#6b6a65] dark:text-[#615e5e]"
            >
              Arquitetura limpa e código bem estruturado não são opcionais pra
              mim, são o padrão. Transformo requisitos complexos em produtos
              funcionais, priorizando performance, segurança e experiência do
              usuário em cada decisão técnica.
            </p>

            <p
              className="text-md italic transition-colors duration-500
                font-['Plus_Jakarta_Sans',sans-serif]
                text-[#a39f92] dark:text-[#313030]"
            >
              Sempre aprendendo, sempre construindo.
            </p>
          </div>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <div
              className="flex flex-col overflow-hidden rounded-2xl mb-6 transition-colors duration-500
                bg-[#eae8e3b3] dark:bg-[#0f0f0f70]
                border border-[#e2ded6] dark:border-[#1A1A1A]"
            >
              {infoItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-7 py-5 gap-2 transition-all duration-500
                    hover:bg-[#e0ddd6b3] dark:hover:bg-[#2b2a2a70]
                    ${
                      index < infoItems.length - 1
                        ? "border-b border-[#e2ded6] dark:border-[#141414]"
                        : ""
                    }`}
                >
                  <span
                    className="text-xs max-sm:text-[0.6rem] transition-colors duration-500
                      font-['JetBrains_Mono',monospace] tracking-[0.15em]
                      text-[#b5b0a3] dark:text-[#3C3C3C]"
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-md max-sm:text-[0.8rem] font-medium transition-colors duration-500
                      font-['Plus_Jakarta_Sans',sans-serif]
                      text-[#3a3a35] dark:text-[#ccc]"
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/curriculo.pdf"
              download="curriculo-vitor.pdf"
              className="flex items-center justify-center gap-2 rounded-2xl px-6 py-5 tracking-widest no-underline transition-all duration-200
                border bg-[#eae8e3] text-[#6b6a65] border-[#d4cec3]
                hover:border-[#b5ac9c] hover:bg-[#e0ddd6] hover:text-[#1c1c1c]
                dark:bg-[#111111] dark:text-[#9A9A9A] dark:border-[#292929]
                dark:hover:border-[#5A5959] dark:hover:bg-[#181818] dark:hover:text-white"
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
