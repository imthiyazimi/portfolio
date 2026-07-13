"use client";

import dynamic from "next/dynamic";
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

const Background3D = dynamic(() => import("@/components/three/Background3D"), {
  ssr: false,
});

const Canvas3D = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative">
      {/* Global 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas3D
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Background3D />
        </Canvas3D>
      </div>

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
