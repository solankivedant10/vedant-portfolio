import { ContactSection } from '@/components/ui/contact-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact | Vedant Solanki",
    description: "Get in touch for freelance opportunities, collaborations, or just a coffee chat."
}

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <ContactSection />
        </div>
    )
}
