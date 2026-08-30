import { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/constants/projects";
import { Project } from "@/types";
import { useTheme } from "@/hooks/useTheme";
import GithubDark from "@/assets/github-dark.png";
import GithubLight from "@/assets/github-light.png";

function useItemVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useItemVisible();
  const { theme } = useTheme();
  const githubIcon = theme === "dark" ? GithubDark : GithubLight;

  return (
    <div
      ref={ref}
      style={{ "--stagger": `${index * 80}ms` } as React.CSSProperties}
      className={`transition-[opacity,transform] duration-400 ease-out delay-(--stagger)
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div
        className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 cursor-default h-full
          bg-[#eae8e370] border border-[#e2ded6] hover:border-[#d4cec3] hover:bg-[#eae8e3d2]
          dark:bg-[#0f0f0f70] dark:border-[#1A1A1A] dark:hover:border-[#1F1F1F] dark:hover:bg-[#0f0f0fd2]"
      >
        <div className="relative overflow-hidden h-50 bg-[#f0eee9] dark:bg-[#0a0a0a]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-[filter] duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                brightness-75 group-hover:brightness-100"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center
                bg-linear-to-br from-[#eae8e3] to-[#e0ddd6]
                dark:from-[#0f0f0f] dark:to-[#141414]"
            >
              <span
                className="text-[.8rem] transition-colors duration-500
                  font-['JetBrains_Mono',monospace] tracking-[0.2em]
                  text-[#d4cec3] dark:text-[#1f1f1f]"
              >
                {project.title.toUpperCase()}
              </span>
            </div>
          )}

          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] opacity-100 group-hover:opacity-0
              bg-linear-to-t from-[rgba(212,210,210,0.46)] to-transparent
              dark:from-[rgba(12,12,12,0.9)] dark:to-transparent"
          />
        </div>

        <div className="flex flex-col gap-3 p-5 flex-1 text-md font-semibold">
          <h3
            className="leading-[1.3] transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#1c1c1c] dark:text-[#f2f2f2]"
          >
            {project.title}
          </h3>

          <p
            className="text-[.8rem] leading-[1.65] transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#79766c] dark:text-[#4f4f4f]"
          >
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-auto pt-2">
            {project.stack.map((tech) => (
              <img
                key={tech.icon}
                src={tech.icon}
                alt={tech.icon}
                width={30}
                height={30}
                className="object-contain"
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 pt-2 border-t transition-colors duration-500 border-[#e2ded6] dark:border-[#141414]">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 transition-all duration-200 hover:scale-105 px-1 py-2 rounded-lg decoration-0 w-[60%] tracking-[0.08em]
                  bg-[#1c1c1c] dark:bg-white"
              >
                <span className="font-semibold text-[12px] text-white dark:text-black">
                  Visite
                </span>
                <ExternalLink
                  size={14}
                  className="text-white dark:text-black"
                />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-200 hover:scale-105 px-1 py-2 rounded-lg decoration-none w-[30%] tracking-[0.08em]
                  bg-[#eae8e3] border border-[#d4cec3]
                  dark:bg-[#141414] dark:border-[#413f3f]"
              >
                <span className="text-[12px] font-semibold text-[#6b6a65] dark:text-[#8d8d8d]">
                  GitHub
                </span>
                <img src={githubIcon} alt="GitHub" className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-32
        bg-[#f5f3ef] dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-20">
        <div
          ref={titleRef}
          className={`flex flex-col items-center gap-4 text-center transition-[opacity,transform] duration-700 ease-out
            ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2
            className="leading-none tracking-tight max-sm:text-5xl text-8xl font-light transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#4b4a47] dark:text-[#b6b4b4]"
          >
            Meus{" "}
            <span className="font-extrabold text-[#1c1c1c] dark:text-white">
              Projetos
            </span>
          </h2>
          <p
            className="max-w-lg text-md max-sm:text-[0.8rem] leading-[1.7] transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#79766c] dark:text-[#565656]"
          >
            Aplicações reais que desenvolvi do zero, do levantamento de
            requisitos ao deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
