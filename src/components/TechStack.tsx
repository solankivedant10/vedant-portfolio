"use client";

import Image from "next/image";
import { Marquee, MarqueeItem } from "@/components/ui/marquee";

const techStack = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prisma.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg" },
];

export function TechStack() {
    return (
        <section className="py-24 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border mb-4">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Tech Stack
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Tools I Work With
                </h2>
            </div>

            <div className="relative flex flex-col gap-8">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Row 1: Forward */}
                <Marquee pauseOnHover className="[--duration:40s] [--gap:3rem]">
                    {techStack.map((tech) => (
                        <MarqueeItem key={tech.name} className="gap-3">
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={24}
                                height={24}
                                className="h-8 w-8 invert opacity-80"
                            />
                            <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">
                                {tech.name}
                            </span>
                        </MarqueeItem>
                    ))}
                </Marquee>

                {/* Row 2: Reverse */}
                <Marquee reverse pauseOnHover className="[--duration:45s] [--gap:3rem]">
                    {techStack.slice().reverse().map((tech) => (
                        <MarqueeItem key={tech.name} className="gap-3">
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={24}
                                height={24}
                                className="h-8 w-8 invert opacity-80"
                            />
                            <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">
                                {tech.name}
                            </span>
                        </MarqueeItem>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}