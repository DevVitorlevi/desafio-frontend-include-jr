import { useRef, useState, useEffect } from "react";
import { Gamepad2, Music, Trophy } from "lucide-react";
import {
  favoriteGames,
  followedTeams,
  favoritePlayer,
} from "@/constants/hobbies";

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

function HobbyCard({
  icon,
  label,
  index,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  index: number;
  children: React.ReactNode;
}) {
  const { ref, isVisible } = useItemVisible();

  return (
    <div
      ref={ref}
      style={{ "--stagger": `${index * 100}ms` } as React.CSSProperties}
      className={`transition-[opacity,transform] duration-400 ease-out delay-(--stagger)
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div
        className="flex flex-col gap-4 rounded-2xl p-4 h-full transition-all duration-500
          bg-[#eae8e370] border border-[#e2ded6] hover:border-[#d4cec3]
          dark:bg-[#0f0f0f70] dark:border-[#1A1A1A] dark:hover:border-[#1F1F1F]"
      >
        <div className="flex items-center gap-3 border-b pb-4 transition-colors duration-500 border-[#e2ded6] dark:border-[#2c2b2b]">
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

        {children}
      </div>
    </div>
  );
}

export function Hobbies() {
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
      id="hobbies"
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
              text-[#9a988f] dark:text-[#b6b4b4]"
          >
            Meus{" "}
            <span className="font-extrabold text-[#1c1c1c] dark:text-white">
              Hobbies
            </span>
          </h2>
          <p
            className="max-w-lg text-md max-sm:text-[0.8rem] leading-[1.7] transition-colors duration-500
              font-['Plus_Jakarta_Sans',sans-serif]
              text-[#79766c] dark:text-[#565656]"
          >
            Fora do código, é isso que ocupa meu tempo livre.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <HobbyCard icon={<Gamepad2 size={18} />} label="Jogos" index={0}>
            <p
              className="text-[.8rem] leading-[1.65] transition-colors duration-500
                font-['Plus_Jakarta_Sans',sans-serif]
                text-[#79766c] dark:text-[#4f4f4f]"
            >
              Prefiro jogos single-player com foco em narrativa.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {favoriteGames.map((game) => (
                <div
                  key={game.id}
                  className="relative aspect-3/4 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                  title={game.title}
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </HobbyCard>

          <HobbyCard icon={<Music size={18} />} label="Música" index={1}>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://spotify-recently-played.jeffreyca.workers.dev/svg?user=gk4nsxgoi4u8sb6bwytz35fb5&count=7&width=320"
                alt="Últimas músicas ouvidas no Spotify"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </HobbyCard>

          <HobbyCard icon={<Trophy size={18} />} label="Futebol" index={2}>
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                src={favoritePlayer.image}
                alt={favoritePlayer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-3">
                <span
                  className="block text-[10px] transition-colors duration-500
                    font-['JetBrains_Mono',monospace] tracking-[0.15em]
                    text-[#d4cec3]"
                >
                  JOGADOR FAVORITO
                </span>
                <span
                  className="block text-md font-medium text-white
                    font-['Plus_Jakarta_Sans',sans-serif]"
                >
                  {favoritePlayer.name}
                </span>
              </div>
            </div>

            <p
              className="text-[.8rem] leading-[1.65] transition-colors duration-500
                font-['Plus_Jakarta_Sans',sans-serif]
                text-[#79766c] dark:text-[#4f4f4f]"
            >
              Clubes que gosto de acompanhar:
            </p>
            <div className="grid grid-cols-3 gap-2">
              {followedTeams.map((team) => (
                <div
                  key={team.id}
                  className="flex items-center justify-center rounded-lg p-2 aspect-square transition-all duration-300 hover:scale-105
                    bg-transparent border border-[#e2ded6]
                    dark:bg-transparent dark:border-[#2c2b2b]"
                  title={team.name}
                >
                  <img
                    src={team.image}
                    alt={team.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </HobbyCard>
        </div>
      </div>
    </section>
  );
}
