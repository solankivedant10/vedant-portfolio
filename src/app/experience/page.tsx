import { Metadata } from "next";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import { TechStack } from "@/components/TechStack";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Experience | Aniketh Pawar",
    description: "My professional journey and technical expertise.",
};

const experiences = [
    {
        company: "Stealth Startup",
        role: "Full Stack Developer",
        date: "Aug 2024 - Oct 2024",
        type: "Full-time",
        description: "Building the core product from ground up. Working across the entire stack to ship features fast while maintaining code quality.",
        stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
        company: "Manan Network",
        role: "Frontend Developer",
        date: "Sep 2023 - Jan 2024",
        type: "Internship",
        description: "Led frontend development for Web3 dashboard. Improved load times by 40% through code optimization and lazy loading strategies.",
        stack: ["React", "TypeScript", "Web3.js", "Tailwind"],
    },
    {
        company: "Tech Elecon",
        role: "Software Developer Intern",
        date: "May 2024 - Aug 2024",
        type: "Internship",
        description: "Developed a signature verification system using YOLOv5 and PyTorch. Worked on enhancing accuracy and deployment.",
        stack: ["Python", "YOLOv5", "PyTorch", "Computer Vision"],
    }
];

export default function ExperiencePage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Work Experience Section */}
                <section className="space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-white">Work Experience</h1>
                        <p className="text-zinc-400">My professional journey in software development.</p>
                    </div>

                    <div className="grid gap-6">
                        {experiences.map((exp) => (
                            <div
                                key={exp.company}
                                className="group relative p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-zinc-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-1">
                                        <span className="text-sm text-zinc-500 font-mono">{exp.date}</span>
                                        <Badge variant="secondary" className="w-fit text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700">
                                            {exp.type}
                                        </Badge>
                                    </div>
                                </div>

                                <p className="text-zinc-400 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.stack.map((tech) => (
                                        <span key={tech} className="text-xs px-2 py-1 rounded bg-zinc-800/50 text-zinc-400 border border-zinc-800">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack Reuse */}
                <div className="-mx-4 md:mx-0">
                    <TechStack />
                </div>

                {/* GitHub Heatmap */}
                <section className="space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-bold text-white">Coding Activity</h2>
                        <p className="text-zinc-400 text-sm">My open source contributions over the last year.</p>
                    </div>
                    <GitHubHeatmap />
                </section>

            </div>
        </main>
    );
}
