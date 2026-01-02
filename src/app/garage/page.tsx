"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Badge } from "@/components/ui/badge";
import { Terminal, Cpu, LayoutTemplate, Share2 } from "lucide-react";

// PRD 4.5: Garage Data & Logic [cite: 190]
const garageItems = [
  {
    title: "AI Blog Agent",
    status: "In Progress",
    progress: 65,
    description: "An autonomous agent that scrapes tech news and drafts opinionated blog posts.",
    icon: <Terminal className="w-8 h-8 text-purple-400" />,
    stack: "Python, LangChain, OpenAI"
  },
  {
    title: "Portfolio V3",
    status: "Almost Done",
    progress: 90,
    description: "Redesigning my portfolio with improved animations and better UX.",
    icon: <LayoutTemplate className="w-8 h-8 text-blue-400" />,
    stack: "Next.js 15, Aceternity UI"
  },
  {
    title: "Route Mate",
    status: "In Progress",
    progress: 50,
    description: "A platform connecting solo travelers to share rides and split costs.",
    icon: <Share2 className="w-8 h-8 text-green-400" />,
    stack: "React, Tailwind, Framer Motion"
  },
  {
    title: "Home Lab Setup",
    status: "Concept",
    progress: 20,
    description: "Building a private cloud using Raspberry Pi cluster for hosting docker containers.",
    icon: <Cpu className="w-8 h-8 text-orange-400" />,
    stack: "Docker, Kubernetes, Linux"
  }
];

export default function GaragePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground flex items-center gap-3">
             The Garage <span className="text-3xl">🛠️</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            My digital workshop. A collection of experiments, half-baked ideas, and things I&apos;m currently tinkering with. 
            <span className="block mt-2 text-sm italic text-zinc-500">
                (Not everything here works perfectly, and that&apos;s the point.)
            </span>
          </p>
        </div>

        {/* Glowing Grid [cite: 188, 46] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {garageItems.map((item) => (
            <div key={item.title} className="relative h-64 w-full">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                
                <div className="relative z-10 h-full w-full bg-card/80 backdrop-blur-xl border border-border rounded-[inherit] p-6 flex flex-col justify-between overflow-hidden">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-secondary/50 rounded-lg">
                                {item.icon}
                            </div>
                            <Badge variant="outline" className={`
                                ${item.status === 'Almost Done' ? 'text-green-400 border-green-400/30' : 
                                  item.status === 'In Progress' ? 'text-yellow-400 border-yellow-400/30' : 
                                  'text-zinc-500 border-zinc-500/30'}
                            `}>
                                {item.status}
                            </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>

                    {/* Progress Bar [cite: 204] */}
                    <div className="space-y-2">
                         <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Completion</span>
                            <span>{item.progress}%</span>
                         </div>
                         <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-primary transition-all duration-1000 ease-out" 
                                style={{ width: `${item.progress}%` }}
                            />
                         </div>
                         <p className="text-xs text-zinc-500 font-mono mt-2">{item.stack}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}