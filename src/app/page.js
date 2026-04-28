import Image from "next/image";
import Hero from "./components/HeroSection/HeroSection";
import ScrollingTicker from "./components/ScrollingTicker/ScrollingTicker";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <ScrollingTicker></ScrollingTicker>
      <Skills></Skills>
    </div>
  );
}
