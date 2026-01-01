"use client";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Cloud Janitor (FinOps Agent)",
        description: "Autonomous AI agent that detects wasted cloud resources and proposes safe Terraform cleanup code. Features a human-in-the-loop approval workflow to ensure safety before destruction.",
        stack: ["Next.js", "Gemini 1.5 Pro", "Kestra", "Terraform", "Neon DB"],
        live: "https://cloud-janitor-finops.vercel.app",
        github: "https://github.com/solankivedant10/FinOps-Agent",
    },
    {
        title: "SensAI Career Coach",
        description: "Full-stack AI platform offering resume analysis and career guidance. Built with an event-driven architecture using Inngest to handle complex AI workflows asynchronously.",
        stack: ["Next.js", "Neon DB", "Prisma", "Inngest", "Shadcn UI"],
        live: "#", // Add live link if available, or keep #
        github: "https://github.com/solankivedant10/SensAI",
    },
    {
        title: "RAG Resume Analyzer",
        description: "Cost-effective document analysis tool. Uses local embeddings (BAAI/bge-small) to chat with PDFs without hitting API rate limits, with Gemini handling the reasoning.",
        stack: ["Streamlit", "LlamaIndex", "Gemini API", "Python"],
        live: "#",
        github: "https://github.com/solankivedant10/rag-resume-analyzer",
    },
    {
        title: "Talent Recommender",
        description: "Semantic search engine that matches candidates to job postings. Uses vector embeddings to understand context and LLMs to generate 'Why this match?' explanations.",
        stack: ["FastAPI", "React", "Sentence Transformers", "Vector Search"],
        live: "#",
        github: "https://github.com/solankivedant10/Talent-Recommender-LLM",
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
                                {project.live !== "#" && (
                                    <Link href={project.live} target="_blank" aria-label={`Visit ${project.title} live site`} className="text-zinc-400 hover:text-white transition-colors">
                                        <ExternalLink className="h-5 w-5" />
                                    </Link>
                                )}
                                <Link href={project.github} target="_blank" aria-label={`View ${project.title} on GitHub`} className="text-zinc-400 hover:text-white transition-colors">
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