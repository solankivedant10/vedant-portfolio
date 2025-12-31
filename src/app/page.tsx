import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Navigation */}
      <Navbar />

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

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}
