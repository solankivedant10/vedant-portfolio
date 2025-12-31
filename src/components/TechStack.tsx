"use client";

import Image from "next/image";

const techStack = [
    { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
    { name: "TypeScript", color: "#3178C6", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg" },
    { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
    { name: "Next.js", color: "#000000", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" },
    { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
    { name: "Node.js", color: "#339933", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
    { name: "PostgreSQL", color: "#4169E1", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg" },
    { name: "MongoDB", color: "#47A248", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg" },
    { name: "Docker", color: "#2496ED", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg" },
    { name: "AWS", color: "#FF9900", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg" },
    { name: "Git", color: "#F05032", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" },
    { name: "Figma", color: "#F24E1E", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg" },
];

export const TechStack = () => {
    return (
        <section className="py-24 px-4 max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Tools I Work With</h2>
                <p className="text-muted-foreground">Technologies I use daily to bring ideas to life</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {techStack.map((tech) => (
                    <div
                        key={tech.name}
                        className="group flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 cursor-default"
                    >
                        <div className="relative h-10 w-10 mb-3 transition-transform duration-300 group-hover:scale-110">
                            {/* Inverting color for dark mode visibility where necessary, or using the raw SVG */}
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={40}
                                height={40}
                                className="h-full w-full object-contain invert opacity-80 group-hover:opacity-100 transition-opacity"
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
