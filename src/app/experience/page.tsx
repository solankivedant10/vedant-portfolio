import { Metadata } from "next";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import { TechStack } from "@/components/TechStack";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Experience | Vedant Solanki",
    description: "My professional journey and technical expertise.",
};

const experiences = [
    {
        company: "InfiJobs LLC",
        role: "Software Developer",
        date: "Oct 2025 - Present",
        type: "Full-time",
        description: "Architected a career platform with 100% type-safety. Reduced load times by ~40% via manual Vite chunk splitting and engineered a serverless AI code evaluator using Google Gemini 2.0.",
        stack: ["React 19", "TypeScript", "Supabase", "PostgreSQL", "Gemini API"],
    },
    {
        company: "LogicRain Technologies",
        role: "Software Engineer Intern",
        date: "Jan 2025 - Apr 2025",
        type: "Internship",
        description: "Developed a signature verification model achieving 95% accuracy using YOLOv5. Engineered an OpenCV preprocessing pipeline to normalize inputs and minimize false positives.",
        stack: ["Python", "YOLOv5", "PyTorch", "OpenCV", "NumPy"],
    }
];

export default function ExperiencePage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Work Experience Section */}
                <section className="space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-foreground">Work Experience</h1>
                        <p className="text-muted-foreground">My professional journey in software development.</p>
                    </div>

                    <div className="grid gap-6">
                        {experiences.map((exp) => (
                            <div
                                key={exp.company}
                                className="group relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-1">
                                        <span className="text-sm text-muted-foreground font-mono">{exp.date}</span>
                                        <Badge variant="secondary" className="w-fit text-xs">
                                            {exp.type}
                                        </Badge>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.stack.map((tech) => (
                                        <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border">
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
                        <h2 className="text-2xl font-bold text-foreground">Coding Activity</h2>
                        <p className="text-muted-foreground text-sm">My open source contributions over the last year.</p>
                    </div>
                    <GitHubHeatmap />
                </section>

            </div>
        </main>
    );
}