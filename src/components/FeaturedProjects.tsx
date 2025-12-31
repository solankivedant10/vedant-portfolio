"use client";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "SneakOut",
        description: "Discover hidden gems in your city. A hyperlocal spot discovery platform where users crowdsource and explore nearby hangout locations. Search by category, proximity, or community ratings.",
        stack: ["React", "Node.js", "MongoDB", "Leaflet.js", "JWT"],
        live: "#",
        github: "#",
    },
    {
        title: "SangbadBangla",
        description: "Dynamic Bengali news website serving thousands of readers with live cricket scores, breaking news, and an admin dashboard for content management.",
        stack: ["React", "Node.js", "Firebase", "Auth0"],
        live: "#",
        github: "#",
    },
    {
        title: "Voting App",
        description: "Real-time voting application with Aadhar-based authentication. Users can vote for candidates and view live vote counts as they update.",
        stack: ["Node.js", "Express", "MongoDB"],
        live: "#",
        github: "#",
    },
    {
        title: "Routemate",
        description: "A website to connect solo travelers across the world. Find companions for your next journey.",
        stack: ["JavaScript", "TailwindCSS", "ReactJs", "Framer Motion"],
        live: "#",
        github: "#",
    }
];

export const FeaturedProjects = () => {
    return (
        <section className="py-12">
            <div className="mb-12 space-y-4">
                <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-400">
                    PORTFOLIO
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Projects</span>
                </h2>
                <p className="text-zinc-400 max-w-2xl">
                    A selection of projects I&apos;ve built. Each one taught me something new.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group relative flex flex-col p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex gap-3">
                                <Link href={project.live} aria-label={`Visit ${project.title} live site`} className="text-zinc-400 hover:text-white transition-colors">
                                    <ExternalLink className="h-5 w-5" />
                                </Link>
                                <Link href={project.github} aria-label={`View ${project.title} on GitHub`} className="text-zinc-400 hover:text-white transition-colors">
                                    <Github className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.stack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border-zinc-700 font-normal px-3"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
