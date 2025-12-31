import { ContactSection } from '@/components/ui/contact-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact | Aniketh Pawar",
    description: "Get in touch for collaborations, freelance work, or just to say hi."
}

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <ContactSection />
        </div>
    )
}
