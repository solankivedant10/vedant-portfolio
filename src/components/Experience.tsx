'use client'

import { Timeline } from '@/components/ui/timeline'
import { Badge } from '@/components/ui/badge'

const experiences = [
    {
        id: 1,
        role: 'Software Developer',
        company: 'InfiJobs LLC',
        type: 'Full-time',
        duration: 'Oct 2025 - Present',
        description: 'Architected a career platform with 100% type-safety. Reduced load times by ~40% via manual Vite chunk splitting and engineered a serverless AI code evaluator using Google Gemini 2.0.',
        skills: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gemini API'],
    },
    {
        id: 2,
        role: 'Data Science Intern',
        company: 'LogicRain Technologies',
        type: 'Internship',
        duration: 'Jan 2025 - Apr 2025',
        description: 'Developed a signature verification model achieving 95% accuracy using YOLOv5. Engineered an OpenCV preprocessing pipeline to normalize inputs and minimize false positives.',
        skills: ['Python', 'YOLOv5', 'PyTorch', 'OpenCV', 'NumPy'],
    }
]

export default function Experience() {
    const timelineData = experiences.map(exp => ({
        title: exp.duration,
        content: (
            <div>
                <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                        {exp.company}
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-medium text-muted-foreground">
                            {exp.role}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                            {exp.type}
                        </Badge>
                    </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        )
    }))

    return (
        <section id="experience" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        Career
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                    What I&apos;ve been up to
                </h2>
                <p className="text-muted-foreground max-w-xl">
                    My professional journey and the companies I&apos;ve had the privilege to work with.
                </p>
            </div>

            <Timeline data={timelineData} />
        </section>
    )
}