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

export function TechStackMarquee() {
    return (
        <section className="py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <p className="text-sm text-zinc-500 uppercase tracking-wider mb-2">
                    — TECH STACK
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Tools I Work With
                </h2>
            </div>

            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                <Marquee pauseOnHover className="[--duration:30s]">
                    {techStack.map((tech) => (
                        <MarqueeItem key={tech.name} className="gap-3">
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={24}
                                height={24}
                                className="h-6 w-6 invert opacity-80"
                            />
                            <span className="text-sm font-medium text-zinc-300 whitespace-nowrap">
                                {tech.name}
                            </span>
                        </MarqueeItem>
                    ))}
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:35s] mt-4">
                    {techStack.slice().reverse().map((tech) => (
                        <MarqueeItem key={tech.name} className="gap-3">
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={24}
                                height={24}
                                className="h-6 w-6 invert opacity-80"
                            />
                            <span className="text-sm font-medium text-zinc-300 whitespace-nowrap">
                                {tech.name}
                            </span>
                        </MarqueeItem>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
