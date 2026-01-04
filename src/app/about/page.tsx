import { Metadata } from 'next'
import ResumeContent from './content'

export const metadata: Metadata = {
    title: "Resume | Vedant Solanki",
    description: "My journey as a Software Developer."
}

export default function AboutPage() {
    return <ResumeContent />
}
