"use client";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    highlights?: string[]; 
    stack: string[];
    live: string;
    github: string;
    category: "Full Stack" | "AI / ML" | "Frontend" | "Backend";
}

const projects: Project[] = [
    {
        title: "Cloud Janitor (FinOps Agent)",
        description: "Autonomous AI agent that detects wasted cloud resources and proposes safe Terraform cleanup code. Features a human-in-the-loop approval workflow to ensure safety before destruction.",
        highlights: [
            "AI-Powered Waste Detection using Gemini-based analysis.",
            "Structured JSON reports with savings breakdowns via Kestra."
        ],
        stack: ["Next.js", "Gemini 1.5 Pro", "Kestra", "Terraform", "Cline"],
        live: "https://cloud-janitor-finops.vercel.app",
        github: "https://github.com/solankivedant10/FinOps-Agent",
        category: "AI / ML",
    },
    {
        title: "SensAI Career Coach",
        description: "Full-stack AI platform offering resume analysis and career guidance. Built with an event-driven architecture using Inngest to handle complex AI workflows asynchronously.",
        highlights: [
            "Generates tailored career documents using LLMs.",
            "Interview Preparation Module with adaptive feedback loops."
        ],
        stack: ["Next.js", "Neon DB", "Prisma", "Inngest", "Shadcn UI"],
        live: "#",
        github: "https://github.com/solankivedant10/SensAI",
        category: "Full Stack",
    },
    {
        title: "RAG Resume Analyzer",
        description: "Cost-effective document analysis tool. Uses local embeddings (BAAI/bge-small) to chat with PDFs without hitting API rate limits, with Gemini handling the reasoning.",
        highlights: [
            "Local Embeddings: Zero API costs for processing documents.",
            "Built on LlamaIndex for robust document indexing."
        ],
        stack: ["Streamlit", "LlamaIndex", "Gemini API", "Python"],
        live: "#",
        github: "https://github.com/solankivedant10/rag-resume-analyzer",
        category: "AI / ML",
    },
    {
        title: "Talent Recommender",
        description: "Semantic search engine that matches candidates to job postings. Uses vector embeddings to understand context and LLMs to generate explanations.",
        highlights: [
            "Prototype AI-driven talent recommendation engine.",
            "Rankings based on bio, rates, and semantic embeddings."
        ],
        stack: ["FastAPI", "React", "Sentence Transformers", "Vector Search"],
        live: "#",
        github: "https://github.com/solankivedant10/Talent-Recommender-LLM",
        category: "AI / ML",
    }
];

const getCategoryColor = (category: string) => {
    switch (category) {
        case "Full Stack":
            return "bg-indigo-500/20 text-indigo-400 border-indigo-500/30";
        case "AI / ML":
            return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
        case "Frontend":
            return "bg-blue-500/20 text-blue-400 border-blue-500/30";
        case "Backend":
            return "bg-orange-500/20 text-orange-400 border-orange-500/30";
        default:
            return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
    }
};

export const FeaturedProjects = () => {
    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
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

                <div className="flex flex-col gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300"
                        >
                            <Badge className={`absolute top-4 right-4 ${getCategoryColor(project.category)} border font-medium`}>
                                {project.category}
                            </Badge>

                            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-zinc-400 leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* --- RENDER HIGHLIGHTS HERE --- */}
                                    {project.highlights && project.highlights.length > 0 && (
                                        <ul className="mb-6 space-y-2">
                                            {project.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/60" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="flex flex-wrap gap-2 mb-6">
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

                                    <div className="flex gap-4">
                                        {project.live !== "#" && (
                                            <Link
                                                href={project.live}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </Link>
                                        )}
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                                        >
                                            <Github className="h-4 w-4" />
                                            Source Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};