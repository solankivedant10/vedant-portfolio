import { Metadata } from "next";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import Footer from "@/components/Footer";

// IMPORTS: We import the 'Content' components to reuse them here
// This allows us to show the full About and Garage sections on the home page
import AboutContent from "@/app/about/content";
import GarageContent from "@/app/garage/content";

export const metadata: Metadata = {
  title: "Vedant Solanki | Full Stack Developer",
  description: "Software Developer specialized in building high-performance, secure web applications and autonomous agents.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* 1. Fixed Header (Name + Live Clock) */}
      <Header />

      {/* 2. Hero Section (The Hook) */}
      <Hero />

      {/* 3. Tech Stack (The Toolset - moved up for authority) */}
      <TechStack />

      {/* 4. About Section (The Story & "Why Me") */}
      <section id="about" className="relative">
         <AboutContent />
      </section>

      {/* 5. Experience Section (Professional History) */}
      <section id="experience">
        <Experience />
      </section>

      {/* 6. Featured Projects (Major Deployments) */}
      <section id="projects">
        <FeaturedProjects />
      </section>

      {/* 7. The Garage (Experiments & Learning) */}
      <section id="garage">
         <GarageContent />
      </section>

      {/* 8. Call to Action */}
      <section id="contact">
        <LetsWorkTogether />
      </section>

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}