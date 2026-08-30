import { useRef, useState, useEffect } from "react";
import { certificates } from "@/constants/certificates";
import { Certificate } from "@/types";

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

function CertificateCard({
  certificate,
  index,
}: {
  certificate: Certificate;
  index: number;
}) {
  const { ref, isVisible } = useItemVisible();

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
        <div className="relative overflow-hidden h-80 flex items-center justify-center p-4 bg-[#f0eee9] dark:bg-[#0a0a0a]">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-w-full max-h-full object-contain transition-[filter] duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
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
                {certificate.title.toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Certificates() {
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
      id="certificates"
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
              Certificados
            </span>
          </h2>
          <p
            className="max-w-lg text-md max-sm:text-[0.8rem] leading-[1.7] transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#79766c] dark:text-[#565656]"
          >
            Alguns certificados adquiridos durante minha jornada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
