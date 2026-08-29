import { useRef, useState, useEffect } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/constants/experience";
import { ExperienceItem } from "@/types";

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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function ItemCard({ item }: { item: ExperienceItem }) {
  return (
    <div
      className="flex flex-col gap-3 rounded-2xl transition-all duration-500 px-5 py-6
        bg-[#eae8e3b3] border border-[#e2ded6] hover:border-[#d4cec3] hover:bg-[#e0ddd6b3]
        dark:bg-[#0f0f0f70] dark:border-[#1A1A1A] dark:hover:border-[#1F1F1F] dark:hover:bg-[#1616168e]"
    >
      <span
        className="text-xs transition-colors duration-500
          font-['JetBrains_Mono',monospace] tracking-[0.15em]
          text-[#b0ab9d] dark:text-[#4e4e4e]"
      >
        {item.period}
      </span>

      <h3
        className="text-md font-semibold leading-[1.3] transition-colors duration-500
          font-['Plus_Jakarta_Sans',sans-serif]
          text-[#3a3a35] dark:text-[#B9B9B9]"
      >
        {item.title}
      </h3>

      <p
        className="text-[0.75rem] transition-colors duration-500
          font-['JetBrains_Mono',monospace] tracking-[0.08em]
          text-[#b0ab9d] dark:text-[#4e4e4e]"
      >
        {item.institution}
      </p>

      {item.bullets.length > 0 && (
        <ul className="flex flex-col gap-1.5 mt-1">
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[.8rem] leading-[1.6] transition-colors duration-500
                font-['Plus_Jakarta_Sans',sans-serif]
                text-[#79766c] dark:text-[#918f8f]"
            >
              <span className="mt-1.5 shrink-0 text-[#d4cec3] dark:text-[#2e2e2e]">
                •
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {item.stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="text-[.6rem] px-1 py-1.2 rounded-[.3rem] transition-all duration-500
                font-['JetBrains_Mono',monospace] tracking-[0.08em]
                bg-[#eae8e3] border border-[#e2ded6] text-[#8a8579] hover:border-[#c7c0b3]
                dark:bg-[#141414] dark:border-[#1A1A1A] dark:text-[#616060] dark:hover:border-[#494848]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const { ref, isVisible } = useItemVisible();
  const isLeft = index % 2 === 0;
  const isWork = item.type === "work";

  const leftSlotClasses = [
    "w-[calc(50%-18px)] pr-8 transition-[opacity,transform] duration-600 ease-out",
    isLeft ? "visible pointer-events-auto" : "invisible pointer-events-none",
    isLeft && isVisible ? "opacity-100 translate-x-0" : "",
    isLeft && !isVisible ? "opacity-0 -translate-x-10" : "",
    !isLeft ? "opacity-0" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const rightSlotClasses = [
    "w-[calc(50%-18px)] pl-8 ml-auto transition-[opacity,transform] duration-600 ease-out",
    !isLeft ? "visible pointer-events-auto" : "invisible pointer-events-none",
    !isLeft && isVisible ? "opacity-100 translate-x-0" : "",
    !isLeft && !isVisible ? "opacity-0 translate-x-10" : "",
    isLeft ? "opacity-0" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className="relative flex items-start mb-12">
      <div className={leftSlotClasses}>
        {isLeft && <ItemCard item={item} />}
      </div>

      <div
        className="absolute flex items-center justify-center rounded-full z-10 w-9 h-9 left-[50%] top-4 -translate-x-1/2 transition-colors duration-500
          bg-[#f5f3ef] border border-[#e2ded6] text-[#79766c]
          dark:bg-[#0c0c0c] dark:border-[#1f1f1f] dark:text-[#565656]"
      >
        {isWork ? <Briefcase size={14} /> : <GraduationCap size={14} />}
      </div>

      <div className={rightSlotClasses}>
        {!isLeft && <ItemCard item={item} />}
      </div>
    </div>
  );
}

function MobileTimelineItem({ item }: { item: ExperienceItem; index: number }) {
  const { ref, isVisible } = useItemVisible();
  const isWork = item.type === "work";

  return (
    <div ref={ref} className="relative flex items-start gap-4 mb-6">
      <div
        className="flex items-center justify-center rounded-full z-10 w-8 h-8 shrink-0 transition-colors duration-500
          bg-[#f5f3ef] border border-[#e2ded6] text-[#79766c]
          dark:bg-[#0c0c0c] dark:border-[#1f1f1f] dark:text-[#565656]"
      >
        {isWork ? <Briefcase size={12} /> : <GraduationCap size={12} />}
      </div>

      <div
        className={`flex-1 pb-2 transition-[opacity,transform] duration-500 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
      >
        <ItemCard item={item} />
      </div>
    </div>
  );
}

export function Experience() {
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
      id="experience"
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
              text-[#79766c] dark:text-[#b6b4b4]"
          >
            Minha{" "}
            <span className="font-extrabold text-[#1c1c1c] dark:text-white">
              Jornada
            </span>
          </h2>
          <p
            className="max-w-lg text-md max-sm:text-[0.8rem] leading-[1.7] transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#79766c] dark:text-[#565656]"
          >
            Experiências profissionais e acadêmicas que moldaram minha
            trajetória.
          </p>
        </div>

        <div className="hidden md:block relative">
          <div
            className="absolute top-0 bottom-0 w-px left-[50%] -translate-x-1/2 transition-colors duration-500
              bg-[#e2ded6] dark:bg-[#141414]"
            aria-hidden="true"
          />
          {experiences.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="flex flex-col md:hidden relative">
          <div
            className="absolute top-0 bottom-0 w-px left-4 transition-colors duration-500
              bg-[#e2ded6] dark:bg-[#141414]"
            aria-hidden="true"
          />
          {experiences.map((item, index) => (
            <MobileTimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
