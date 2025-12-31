'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ActivityCalendar } from 'react-activity-calendar'

import { Github, Flame, Calendar, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface ContributionDay {
    date: string
    count: number
    level: 0 | 1 | 2 | 3 | 4
}



const GITHUB_USERNAME = 'ANIKETHPAWAR'

// Theme colors matching Zinc dark theme
const theme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
}

export function GitHubHeatmap() {
    const [data, setData] = useState<ContributionDay[]>([])
    const [stats, setStats] = useState({ total: 0, streak: 0, bestStreak: 0 })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    useEffect(() => {
        async function fetchContributions() {
            try {
                const response = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
                )

                if (!response.ok) {
                    throw new Error('Failed to fetch contributions')
                }

                const result = await response.json()

                // Transform data to match react-activity-calendar format
                const contributions: ContributionDay[] = result.contributions.map((day: { date: string; count: number }) => ({
                    date: day.date,
                    count: day.count,
                    level: Math.min(4, Math.floor(day.count / 3)) as 0 | 1 | 2 | 3 | 4
                }))

                setData(contributions)
                setStats({
                    total: result.total?.lastYear || contributions.reduce((acc: number, day: ContributionDay) => acc + day.count, 0),
                    streak: calculateCurrentStreak(contributions),
                    bestStreak: calculateBestStreak(contributions)
                })
                setLoading(false)
            } catch (err) {
                console.error('Error fetching GitHub data:', err)
                setError('Could not load GitHub contributions')
                setLoading(false)

                // Use fallback data
                const fallbackData = generateFallbackData()
                setData(fallbackData)
                setStats({ total: 500, streak: 7, bestStreak: 30 })
            }
        }

        fetchContributions()
    }, [])

    function calculateCurrentStreak(contributions: ContributionDay[]): number {
        let streak = 0
        const sorted = [...contributions].sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )

        for (const day of sorted) {
            if (day.count > 0) streak++
            else break
        }
        return streak
    }

    function calculateBestStreak(contributions: ContributionDay[]): number {
        let bestStreak = 0
        let currentStreak = 0

        for (const day of contributions) {
            if (day.count > 0) {
                currentStreak++
                bestStreak = Math.max(bestStreak, currentStreak)
            } else {
                currentStreak = 0
            }
        }
        return bestStreak
    }

    function generateFallbackData(): ContributionDay[] {
        const data: ContributionDay[] = []
        const today = new Date()

        for (let i = 365; i >= 0; i--) {
            const date = new Date(today)
            date.setDate(date.getDate() - i)
            const count = Math.floor(Math.random() * 10)
            data.push({
                date: date.toISOString().split('T')[0],
                count,
                level: Math.min(4, Math.floor(count / 3)) as 0 | 1 | 2 | 3 | 4
            })
        }
        return data
    }

    return (
        <section id="github" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                            Open Source
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                        GitHub Activity
                    </h2>
                    <p className="text-muted-foreground">
                        My contribution graph from the past year. Building in public, one commit at a time.
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="grid grid-cols-3 gap-4 mb-8"
                >
                    <Card>
                        <CardContent className="p-4 text-center">
                            <TrendingUp className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                            <p className="text-2xl font-bold text-foreground">{stats.total}+</p>
                            <p className="text-xs text-muted-foreground">Contributions</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 text-center">
                            <Flame className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-foreground">{stats.streak}</p>
                            <p className="text-xs text-muted-foreground">Current Streak</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 text-center">
                            <Calendar className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                            <p className="text-2xl font-bold text-foreground">{stats.bestStreak}</p>
                            <p className="text-xs text-muted-foreground">Best Streak</p>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Heatmap */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Card className="overflow-hidden">
                        <CardContent className="p-6">
                            {loading ? (
                                <div className="flex items-center justify-center h-32">
                                    <div className="animate-pulse text-muted-foreground">Loading contributions...</div>
                                </div>
                            ) : error && data.length === 0 ? (
                                <div className="flex items-center justify-center h-32 text-muted-foreground">
                                    {error}
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <ActivityCalendar
                                        data={data}
                                        theme={{
                                            dark: theme.dark,
                                            light: theme.dark // Force dark theme
                                        }}
                                        colorScheme="dark"
                                        blockSize={12}
                                        blockMargin={4}
                                        fontSize={12}
                                        showWeekdayLabels
                                        labels={{
                                            legend: {
                                                less: 'Less',
                                                more: 'More'
                                            },
                                            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                                        }}
                                    />
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>

                {/* GitHub Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-center mt-6"
                >
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        @{GITHUB_USERNAME}
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default GitHubHeatmap
