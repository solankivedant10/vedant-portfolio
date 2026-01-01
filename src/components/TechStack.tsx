"use client";

import Image from "next/image";

// Using simple-icons via CDN for consistent, high-quality SVG logos
const techStack = [
    // Languages
    { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
    { name: "TypeScript", color: "#3178C6", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg" },
    { name: "Python", color: "#3776AB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" },

    // Frameworks & Libraries
    { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
    { name: "Next.js", color: "#000000", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" },
    { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
    { name: "Framer Motion", color: "#0055FF", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/framer.svg" },

    // Backend & Cloud
    { name: "Node.js", color: "#339933", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
    { name: "Supabase", color: "#3ECF8E", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg" },
    { name: "PostgreSQL", color: "#4169E1", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg" },
    { name: "MongoDB", color: "#47A248", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg" },

    // Tools & AI
    { name: "Docker", color: "#2496ED", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg" },
    { name: "AWS", color: "#FF9900", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg" },
    { name: "Git", color: "#F05032", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" },
    { name: "Google Gemini", color: "#8E75B2", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlegemini.svg" },
];

export const TechStack = () => {
    return (
        <section className="py-24 px-4 max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Tools I Work With</h2>
                <p className="text-muted-foreground">Technologies I use daily to bring ideas to life</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techStack.map((tech) => (
                    <div
                        key={tech.name}
                        className="group flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 cursor-default relative overflow-hidden"
                    >
                        {/* Subtle colored glow on hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                            style={{ backgroundColor: tech.color }}
                        />

                        <div className="relative h-10 w-10 mb-3 transition-transform duration-300 group-hover:scale-110">
                            {/* Invert black icons (Next.js) for dark mode visibility, others get standard invert/opacity treatment */}
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={40}
                                height={40}
                                className={`h-full w-full object-contain transition-opacity duration-300
                                    ${tech.name === 'Next.js' ? 'invert' : 'invert-[.8] opacity-70 group-hover:opacity-100 group-hover:invert-0'} 
                                `}
                            />
                        </div>
                        <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};