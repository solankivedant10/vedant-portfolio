import { Metadata } from 'next'
import AboutContent from './content'

export const metadata: Metadata = {
    title: "About | Aniketh Pawar",
    description: "My journey from engineering student to full-stack developer."
}

export default function AboutPage() {
    return <AboutContent />
}
