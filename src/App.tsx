import { ThemeProvider } from "@/hooks/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Certificates } from "./components/sections/Certificates";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certificates />
        <Skills />
        <Projects />
      </main>
    </ThemeProvider>
  );
}

export default App;
