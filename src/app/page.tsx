import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import GitHubHeatmap from '@/components/GitHubHeatmap'
import { Footer } from '@/components/Footer'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Experience Section */}
      <Experience />

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-6">
        <Separator className="bg-border" />
      </div>

      {/* GitHub Heatmap */}
      <GitHubHeatmap />

      {/* Footer */}
      <Footer />
    </div>
  )
}
