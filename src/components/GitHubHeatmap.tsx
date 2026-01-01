"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "@/components/ui/git-hub-calendar";

export default function GitHubHeatmap() {
    const [data, setData] = useState<{ date: string; count: number }[]>([]);

    useEffect(() => {
        // Updated to fetch data for 'solankivedant10'
        fetch("https://github-contributions-api.jogruber.de/v4/solankivedant10?y=last")
            .then((res) => res.json())
            .then((json) => {
                // Map the API response to our component's format
                if (json.contributions) {
                    setData(json.contributions);
                }
            })
            .catch((err) => console.error("Failed to fetch GitHub data", err));
    }, []);

    return (
        <section className="w-full py-12 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border w-fit">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        Open Source
                    </span>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        GitHub Activity
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        My contribution graph from the past year. Building in public, one commit at a time.
                    </p>
                </div>

                <GitHubCalendar data={data} />
            </div>
        </section>
    );
}