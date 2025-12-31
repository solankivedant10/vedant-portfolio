"use client";

import { useState, useEffect } from "react";
import { format, subDays, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";

interface ContributionDay {
    date: string;
    count: number;
}

interface GitHubCalendarProps {
    data: ContributionDay[];
}

const GitHubCalendar = ({ data }: GitHubCalendarProps) => {
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const today = new Date();
    const startDate = subDays(today, 364); // One year back
    const weeks = 53;

    useEffect(() => {
        setContributions(data.map((item) => ({ ...item, date: new Date(item.date).toISOString() })));
    }, [data]);

    // Determine color intensity based on count
    const getIntensityClass = (count: number) => {
        if (count === 0) return "bg-muted"; // Empty (Zinc-800/900)
        if (count <= 2) return "bg-primary/20"; // Light
        if (count <= 5) return "bg-primary/50"; // Medium
        if (count <= 10) return "bg-primary/80"; // High
        return "bg-primary"; // Max
    };

    const renderWeeks = () => {
        const weeksArray = [];
        let currentWeekStart = startOfWeek(startDate, { weekStartsOn: 0 });

        for (let i = 0; i < weeks; i++) {
            const weekDays = eachDayOfInterval({
                start: currentWeekStart,
                end: endOfWeek(currentWeekStart, { weekStartsOn: 0 }),
            });

            weeksArray.push(
                <div key={i} className="flex flex-col gap-1">
                    {weekDays.map((day, index) => {
                        const dayStr = format(day, "yyyy-MM-dd");
                        const contribution = contributions.find((c) => c.date.startsWith(dayStr));
                        const count = contribution ? contribution.count : 0;
                        const colorClass = getIntensityClass(count);

                        return (
                            <div
                                key={index}
                                className={cn("w-3 h-3 rounded-[2px] transition-colors", colorClass)}
                                title={`${format(day, "PPP")}: ${count} contributions`}
                            />
                        );
                    })}
                </div>
            );
            currentWeekStart = addDays(currentWeekStart, 7);
        }
        return weeksArray;
    };

    return (
        <div className="p-4 border rounded-xl bg-card/50 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
                <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
                    {renderWeeks()}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2 justify-end">
                    <span>Less</span>
                    <div className="w-3 h-3 rounded-[2px] bg-muted" />
                    <div className="w-3 h-3 rounded-[2px] bg-primary/20" />
                    <div className="w-3 h-3 rounded-[2px] bg-primary/50" />
                    <div className="w-3 h-3 rounded-[2px] bg-primary/80" />
                    <div className="w-3 h-3 rounded-[2px] bg-primary" />
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

export { GitHubCalendar };
