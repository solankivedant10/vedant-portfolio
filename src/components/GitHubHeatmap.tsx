"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "@/components/ui/git-hub-calendar";

export default function GitHubHeatmap() {
    const [data, setData] = useState<{ date: string; count: number }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching data for 'solankivedant10'
        fetch("https://github-contributions-api.jogruber.de/v4/solankivedant10?y=last")
            .then((res) => res.json())
            .then((json) => {
                if (json.contributions) {
                    setData(json.contributions);
                }
            })
            .catch((err) => console.error("Failed to fetch GitHub data", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="w-full h-32 animate-pulse bg-zinc-900/50 rounded-xl border border-zinc-800" />
        );
    }

    return (
        <div className="w-full">
            <GitHubCalendar data={data} />
        </div>
    );
}