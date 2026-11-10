import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollUI from "@/components/ScrollUI";
import CommandPalette from "@/components/CommandPalette";
import FoodWork from "@/components/FoodWork";
import RallyWork from "@/components/RallyWork";
import SportsWork from "@/components/SportsWork";

//

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Header />
      <ScrollUI />
      <CommandPalette />
      <main>
        <Hero />
        <FoodWork />
        <RallyWork />
        <SportsWork />
        <About />
        {/* <Education /> */}
        <Contact />
      </main>
    </main>
  );
}