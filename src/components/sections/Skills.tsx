import React from "react";
import { Code2, Settings2, Wrench, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { skills } from "@/constants/skills";
import { SkillCategory } from "@/types";

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Code2 size={18} />,
  backend: <Settings2 size={18} />,
  tools: <Wrench size={18} />,
  methodologies: <BookOpen size={18} />,
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Ferramentas",
  methodologies: "Metodologias",
};

function CategoryCard({
  category,
  isVisible,
  blockIndex,
}: {
  category: SkillCategory;
  isVisible: boolean;
  blockIndex: number;
}) {
  const label = categoryLabels[category.category] ?? category.label;
  const icon = categoryIcons[category.category];
  const isMethodologies = category.category === "methodologies";

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${blockIndex * 120}ms, transform 0.6s ease ${blockIndex * 120}ms`,
      }}
    >
      <div className="flex flex-col gap-4 w-full h-full p-6 border  dark:border-[#ffffff1a] border-[#00000027] rounded-md ">
        <div className="flex items-center justify-between border-b pb-4 transition-colors duration-500 border-[#e2ded6] dark:border-[#2c2b2b]">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-500
                  bg-[#eae8e3] border border-[#e2ded6] text-[#79766c]
                  dark:bg-[#141414] dark:border-[#1F1F1F] dark:text-[#565656]"
            >
              {icon}
            </div>
            <h3
              className="text-md font-semibold transition-colors duration-500
                  font-['Plus_Jakarta_Sans',sans-serif] tracking-[-0.01em]
                  text-[#3a3a35] dark:text-[#ccc]"
            >
              {label}
            </h3>
          </div>
          <span
            className="text-[11px] transition-colors duration-500
                font-['JetBrains_Mono',monospace] tracking-widest
                text-[#d4cec3] dark:text-[#1F1F1F]"
          >
            {String(blockIndex + 1).padStart(2, "0")}
          </span>
        </div>

        {!isMethodologies && (
          <div className="flex flex-wrap gap-3">
            {category.techs.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center rounded-xl p-2 gap-2 w-18 h-18 shrink-0 transition-transform duration-200 hover:scale-110 cursor-default
                    bg-[#eae8e348] border border-[#e2ded6]
                    dark:bg-[#2c2c2c48] dark:border-[#2c2b2b]"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={38}
                  height={38}
                  className="object-contain"
                />
                <span
                  className="text-[9px] text-center transition-colors duration-500
                      font-['JetBrains_Mono',monospace] tracking-wider
                      text-[#1c1c1c] dark:text-white"
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {isMethodologies && category.methodologies && (
          <div className="flex flex-wrap gap-2">
            {category.methodologies.map((method) => (
              <span
                key={method}
                className="rounded-lg transition-all duration-200 cursor-default text-[12px] py-1.5 px-3.5
                    font-['JetBrains_Mono',monospace] tracking-wider
                    bg-[#eae8e348] border border-[#e2ded6] text-[#79766c]
                    hover:border-[#c7c0b3] hover:text-[#1c1c1c]
                    dark:bg-[#2c2c2c48] dark:border-[#2c2b2b] dark:text-[#565656]
                    dark:hover:border-[#4a4a4a] dark:hover:text-[#cccccc]"
              >
                {method}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Skills() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({
    threshold: 0.08,
  });

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col justify-center py-32
        bg-[#f5f3ef] dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-20">
        <div
          className={`flex flex-col items-center gap-4 text-center transition-[opacity,transform] duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2
            className="leading-none tracking-tight max-sm:text-5xl text-8xl font-light transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#4b4a47] dark:text-[#b6b4b4]"
          >
            Minha{" "}
            <span className="font-extrabold text-[#1c1c1c] dark:text-white">
              Stack
            </span>
          </h2>
          <p
            className="max-w-lg text-md max-sm:text-[0.8rem] leading-[1.7] transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#79766c] dark:text-[#565656]"
          >
            Ferramentas e tecnologias que uso no dia a dia para construir
            aplicações completas e escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((category, index) => (
            <CategoryCard
              key={category.category}
              category={category}
              isVisible={isVisible}
              blockIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
