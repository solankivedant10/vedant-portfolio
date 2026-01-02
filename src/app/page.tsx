import { Metadata } from "next";
import Hero from "@/components/Hero"; // Ensure this matches your file name (default vs named export)
import { TechStack } from "@/components/TechStack";
import { LetsWorkTogether } from "@/components/LetsWorkTogether";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import GaragePage from "./garage/page";
import { FeaturedProjects } from "@/components/FeaturedProjects";
export const metadata: Metadata = {
  title: "Vedant Solanki | Full Stack Developer",
  description: "Software Developer specialized in building high-performance, secure web applications and autonomous agents.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section (Introduction + Stats)  */}
      <Hero />

      {/* Experience Section */}
      <Experience />

      {/* Garage Section */}
      <GaragePage />

      {/* Portfolio Section */}
      <FeaturedProjects />

      {/* Tech Stack (Marquee) [cite: 137] */}
      <TechStack />

      {/* CTA Section */}
      <LetsWorkTogether />

      {/* Footer [cite: 228] */}
      <Footer />
    </main>
  );
}