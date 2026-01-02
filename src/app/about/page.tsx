import { Metadata } from 'next'
import AboutContent from './content'

export const metadata: Metadata = {
    title: "About | Vedant Solanki",
    description: "My journey as a Software Developer."
}

export default function AboutPage() {
    return <AboutContent />
}
