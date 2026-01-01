import { Metadata } from 'next'
import GarageContent from './content'

export const metadata: Metadata = {
    title: "The Garage | Vedant Solanki",
    description: "My digital workshop. Current projects, learning roadmap, and experimental code."
}

export default function GaragePage() {
    return <GarageContent />
}
