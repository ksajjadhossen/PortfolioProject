import Image from "next/image";
import Hero from "./components/HeroSection/HeroSection";
import ScrollingTicker from "./components/ScrollingTicker/ScrollingTicker";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <div className="">
      <div className="scroll-smooth">
        <div id="Home">
          <Hero />
        </div>
        <ScrollingTicker />
        <div id="Skills">
          <Skills />
        </div>
        <div id="Education">
          <Education />
        </div>
        <div id="Projects">
          <Portfolio />
        </div>
        <div id="Blogs"></div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
