import { Metadata } from "next";
import Hero from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";

// Reuse section content components
import AboutContent from "@/app/about/content";
import GarageContent from "@/app/garage/content";

export const metadata: Metadata = {
  title: "Vedant Solanki | Full Stack Developer",
  description: "Software Developer specialized in building high-performance, secure web applications and autonomous agents.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Tech Stack */}
      <TechStack />

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Featured Projects */}
      <section id="projects">
        <FeaturedProjects />
      </section>

      {/* The Garage */}
      <section id="garage">
        <GarageContent />
      </section>

      {/* About Section */}
      <section id="about" className="relative">
        <AboutContent />
      </section>

      {/* Call to Action */}
      <section id="contact">
        <LetsWorkTogether />
      </section>

      {/* Footer is rendered in layout.tsx - NO DUPLICATE HERE */}
    </main>
  );
}