import { Metadata } from "next";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { LetsWorkTogether } from "@/components/LetsWorkTogether";

export const metadata: Metadata = {
  title: "Vedant Solanki | Full Stack Developer",
  description: "Software Developer specialized in building high-performance, secure web applications and autonomous agents.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Header (Name + Clock) */}
      <Header />

      {/* Hero Section (Introduction + Stats) */}
      <Hero />

      {/* Tech Stack (New Grid) */}
      <TechStack />

      {/* CTA Section - Perfect way to end the home page */}
      <LetsWorkTogether />
    </main>
  );
}