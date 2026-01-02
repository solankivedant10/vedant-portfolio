import { Metadata } from 'next'
import GarageContent from './content'

export const metadata: Metadata = {
    title: "The Garage | Vedant Solanki",
    description: "My digital garden of experiments, active projects, and learning roadmap."
}

export default function GaragePage() {
    return <GarageContent />
}