"use client";

import Image from "next/image";

const techStack = [
    // Languages
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

    // Frameworks
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

    // Backend & Cloud
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export function TechStack() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">
                        Tools I Work With
                    </h2>
                </div>

                {/* Static Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="group flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default"
                        >
                            <div className="relative h-8 w-8 mb-2">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <span className="text-xs font-medium text-zinc-500 group-hover:text-white transition-colors text-center">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}