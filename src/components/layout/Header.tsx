import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useTheme } from "@/hooks/useTheme";
import { FileUser, Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "SOBRE", href: "#about" },
  { label: "HOBBIES", href: "#hobbies" },
  { label: "JORNADA", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJETOS", href: "#projects" },
];

const mobileNavLinks = [
  { label: "About", href: "#about", number: "01" },
  { label: "Hobbies", href: "#hobbies", number: "02" },
  { label: "Jornada", href: "#experience", number: "03" },
  { label: "Skills", href: "#skills", number: "04" },
  { label: "Projects", href: "#projects", number: "05" },
];

export function Header() {
  const progress = useScrollProgress();
  const { isOpen, close, toggle } = useMobileMenu();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const handleNavClick = (href: string) => {
    close();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500
          bg-[rgba(245,243,239,0.85)] dark:bg-[rgba(0,0,0,0.85)]
          backdrop-blur-md"
      >
        <div
          className="absolute bottom-0 left-0 h-px transition-all duration-500
            bg-linear-to-r from-[#cfcac2] to-[#1c1c1c]
            dark:from-[#4b5563] dark:to-[#ffffff]"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />

        <div className="mx-auto h-26 flex items-center justify-between xl:justify-center xl:gap-20 2xl:gap-40 p-8">
          <a
            href="#"
            className="text-xl tracking-widest transition-colors duration-500
              font-['JetBrains_Mono',monospace]
              text-[#000000] dark:text-[#ffffff]"
            aria-label="Ir para o início"
          >
            {"<Vitor/>"}
          </a>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="tracking-widest text-md cursor-pointer transition-colors duration-500
                  font-['JetBrains_Mono',monospace]
                  text-[#000000] dark:text-[#9A9A9A]
                  hover:text-[#a59f9f] dark:hover:text-[#FFFFFF]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="cursor-pointer border rounded-sm p-2.5 flex items-center justify-center transition-all duration-500 hover:scale-105
                bg-[#eae8e3] dark:bg-[#121212]
                border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]
                text-[#6b6a65] dark:text-[#9a9a9a]"
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="/curriculo.pdf"
              download="curriculo-vitor.pdf"
              className="cursor-pointer border rounded-sm py-2 p-4 flex items-center justify-center gap-2 transition-all duration-500 hover:scale-105
                font-['JetBrains_Mono',monospace] tracking-widest
                bg-[#eae8e3] dark:bg-[#121212]
                border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]
                text-[#6b6a65] dark:text-[#9a9a9a]"
              aria-label="Baixar currículo"
            >
              <FileUser size={18} />{" "}
              <span className="text-[13px]">CURRICULO</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 border-2 rounded-md cursor-pointer transition-all duration-500
                bg-[#eae8e3d0] dark:bg-[#0a0a0a8e]
                border-[#ddd9d1] dark:border-[#201e1e]
                text-[#6b6a65] dark:text-[#9A9A9A]"
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 border-2 rounded-md cursor-pointer transition-all duration-500
                bg-[#eae8e3d0] dark:bg-[#0a0a0a8e]
                border-[#ddd9d1] dark:border-[#201e1e]"
              onClick={toggle}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              <Menu className="transition-colors duration-500 text-[#1c1c1c] dark:text-[#ffffff]" />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-[rgba(10,10,10,0.45)]"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full max-sm:w-[70%] md:w-80 z-60 lg:hidden flex flex-col border border-t-0
          bg-[#f7f6f3] dark:bg-[#080808]
          border-[#e2ded6] dark:border-[#201e1e]
          transition-[background-color_0.5s_ease,border-color_0.5s_ease,transform_0.3s_ease]
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isOpen}
      >
        <div className="flex justify-end border-b transition-colors duration-500 border-[#e2ded6] dark:border-[#201e1e] p-4">
          <button
            onClick={close}
            className="w-10 h-10 flex items-center justify-center border-2 rounded-md cursor-pointer transition-all duration-500
              text-[#6b6a65] dark:text-[#9A9A9A]
              bg-[#eae8e3d0] dark:bg-[#0a0a0a8e]
              border-[#ddd9d1] dark:border-[#201e1e]"
            aria-label="Fechar menu"
          >
            <X />
          </button>
        </div>

        <nav
          className="flex flex-col gap-2 flex-1 py-6 px-4"
          aria-label="Navegação mobile"
        >
          {mobileNavLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`mobile-nav-item${isOpen ? " animate" : ""} cursor-pointer`}
              style={{
                animationDelay: isOpen ? `${index * 60 + 80}ms` : "0ms",
              }}
            >
              <div className="nav-item-inner flex items-center gap-4 py-3.5 px-4">
                <span
                  className="transition-colors duration-500 text-[11px]
                    font-['JetBrains_Mono',monospace]
                    text-[#d8d3c9] dark:text-[#252525]"
                >
                  {link.number}
                </span>
                <span
                  className="transition-colors duration-500 text-[15px] tracking-wider
                    font-['Plus_Jakarta_Sans',sans-serif]
                    text-[#6b6a65] dark:text-[#9A9A9A]"
                >
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 border-t transition-colors duration-500 border-[#e2ded6] dark:border-[#201e1e] p-4">
          <a
            href="/curriculo.pdf"
            download="curriculo-vitor.pdf"
            className="cursor-pointer border rounded-sm py-2 p-4 flex items-center justify-center gap-2 transition-all duration-500 hover:scale-105
              font-['JetBrains_Mono',monospace] tracking-widest
              bg-[#eae8e3] dark:bg-[#121212]
              border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]
              text-[#6b6a65] dark:text-[#9a9a9a]"
            aria-label="Baixar currículo"
          >
            <FileUser size={18} />{" "}
            <span className="text-[13px]">CURRICULO</span>
          </a>
        </div>
      </div>
    </>
  );
}
