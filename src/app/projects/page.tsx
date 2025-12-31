import { Projects } from '@/components/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Projects | Aniketh Pawar",
    description: "A showcase of my technical projects, featuring full-stack applications and experimental tools."
}

export default function ProjectsPage() {
    return (
        <div className="pt-20 min-h-screen">
            <Projects />
        </div>
    )
}
