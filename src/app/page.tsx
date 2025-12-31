import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import GitHubHeatmap from '@/components/GitHubHeatmap'
import { ContactSection } from '@/components/ui/contact-section'
import { Footer } from '@/components/ui/footer-section'
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

      {/* Projects Section */}
      <Projects />

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-6">
        <Separator className="bg-border" />
      </div>

      {/* GitHub Heatmap */}
      <GitHubHeatmap />

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-6">
        <Separator className="bg-border" />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
