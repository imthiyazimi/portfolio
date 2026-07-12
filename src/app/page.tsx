import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Timeline />
      <Stats />
      <TechStack />
      <Projects />
      <Process />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
