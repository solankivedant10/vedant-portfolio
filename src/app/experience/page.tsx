import { Metadata } from "next";
import GitHubHeatmap from "@/components/GitHubHeatmap";
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
        description: "Architected and built a comprehensive career preparation platform serving as a centralized hub for technical interviews and technical learning.",
        // Changed to an array so we can map over them
        highlights: [
            "Reduced initial page load time by ~40% by implementing manual chunk splitting in Vite and lazy-loading 9 feature portals.",
            "Engineered a serverless code evaluation system using Google Gemini 2.0 API with structured JSON prompting to provide real-time feedback on user algorithms.",
            "Designed a robust PostgreSQL schema (11 tables) secured by 25 Row Level Security (RLS) policies to enforce strict multi-tenant data isolation.",
            "Maintained 100% TypeScript coverage across the codebase, utilizing strict typing and interfaces to eliminate runtime errors."
        ],
        stack: ["React 19", "TypeScript", "Supabase", "PostgreSQL", "Gemini API"],
    },
    {
        company: "LogicRain Technologies",
        role: "Software Engineer Intern",
        date: "Jan 2025 - Apr 2025",
        type: "Internship",
        description: "Developed a signature verification model using YOLOv5 and PyTorch, achieving 95% accuracy on a custom dataset.",
        highlights: [
            "Achieved 95% accuracy on a custom dataset of 800 handwritten signatures, significantly reducing manual verification time.",
            "Engineered an image preprocessing pipeline using OpenCV and NumPy to normalize inputs (thresholding, noise reduction), improving feature detection.",
            "Performed Exploratory Data Analysis (EDA) to detect class imbalances and implemented synthetic data augmentation for consistent model performance."
        ],
        stack: ["Python", "YOLOv5", "PyTorch", "OpenCV", "NumPy"],
    }
];

export default function ExperiencePage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto space-y-24">

                <section className="space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-foreground">Work Experience</h1>
                        <p className="text-muted-foreground">My professional journey in software development.</p>
                    </div>

                    <div className="grid gap-8">
                        {experiences.map((exp) => (
                            <div
                                key={exp.company}
                                className="group relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300"
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

                                <p className="text-sm text-foreground mb-4 font-medium italic">
                                    {exp.description}
                                </p>

                                {/* Render the Highlights (Bullet Points) */}
                                <ul className="list-disc list-outside ml-4 space-y-2 mb-6 text-muted-foreground text-sm">
                                    {exp.highlights.map((point, idx) => (
                                        <li key={idx} className="pl-1">
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.stack.map((tech) => (
                                        <span key={tech} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

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