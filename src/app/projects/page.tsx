import { Metadata } from "next";
import { FeaturedProjects } from "@/components/FeaturedProjects";

export const metadata: Metadata = {
    title: "Projects | Aniketh Pawar",
    description: "A showcase of my technical projects and experiments.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6 max-w-7xl mx-auto">
            <FeaturedProjects />
        </main>
    );
}
