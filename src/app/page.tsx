import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Header (Name + Clock) */}
      <Header />

      {/* Hero Section (Introduction + Stats) */}
      <Hero />

      {/* Tech Stack (New Grid) */}
      <TechStack />

      {/* Note: Projects, Garage, Blog, and Contact are now on their own pages.
          We do not render them here to keep the home page clean. */}
    </main>
  );
}
