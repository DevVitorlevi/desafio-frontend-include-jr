import { useEffect, useRef } from "react";
import Lanyard from "@/components/ui/Lanyard";
import Me from "@/assets/card-front.png";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(() => {}, {
      threshold: 0.1,
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden
        bg-[#f5f3ef] dark:bg-[#000000] transition-colors duration-500"
    >
      <div className="absolute z-40 hidden lg:block lg:right-[-2%] lg:top-[-11%] lg:w-[50%] lg:h-[80%] pointer-events-auto">
        <Lanyard
          frontImage={Me}
          imageFit="cover"
          position={[0, -1, 30]}
          gravity={[0, -40, 0]}
          fov={9}
          transparent={true}
          lanyardWidth={2}
        />
      </div>

      <div className="relative z-30 w-full">
        <div className="flex justify-between max-lg:justify-center max-sm:p-0 lg:p-15 xl:p-40 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p
                className="text-xs max-lg:text-center max-lg:text-xl transition-colors duration-500
                  font-['Plus_Jakarta_Sans',monospace] tracking-[0.2em]
                  text-[#9a988f] dark:text-[#838181]"
              >
                OLÁ, EU SOU
              </p>

              <h1
                className="leading-none text-9xl max-sm:text-6xl max-xl:text-8xl max-lg:text-center tracking-tight font-normal transition-colors duration-500
                  font-['Plus_Jakarta_Sans',sans-serif]
                  text-[#1c1c1c] dark:text-[#FFFFFF]"
              >
                Vitor Levi
              </h1>
            </div>

            <p
              className="max-sm:w-[90%] w-145 xl:text-xl leading-relaxed max-sm:text-xs max-lg:text-lg max-lg:text-center max-sm:m-auto transition-colors duration-500
                font-['Plus_Jakarta_Sans',sans-serif]
                text-[#79766c] dark:text-[#545454]"
            >
              Desenvolvedor Full Stack com 2 anos de experiência criando
              aplicações escaláveis. Já atuei em projetos para organizações
              internacionais e aplicações governamentais, sempre focado em
              entregar soluções que geram impacto real e mensurável.
            </p>

            <div className="flex items-center gap-3 max-lg:justify-center flex-wrap">
              <button
                onClick={() => handleScroll("#projects")}
                className="cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-110
                  font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.12em] font-semibold
                  py-[10px] px-[22px] rounded-[4px]
                  bg-[#1c1c1c] text-white dark:bg-[#FFFFFF] dark:text-black"
              >
                VER PROJETOS
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="cursor-pointer border transition-all duration-200 hover:scale-105
                  font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.12em]
                  py-[10px] px-[22px] rounded-[4px]
                  bg-[#eae8e3] text-[#6b6a65] border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.3)]
                  dark:bg-[#121212] dark:text-[#9A9A9A] dark:border-[rgba(255,255,255,0.1)] dark:hover:border-[rgba(255,255,255,0.3)]"
              >
                ENTRAR EM CONTATO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
