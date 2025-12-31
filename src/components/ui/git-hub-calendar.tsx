"use client";
import { format, subDays, addDays, startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";
import { cn } from "@/lib/utils";

interface ContributionDay {
    date: string;
    count: number;
}

interface GitHubCalendarProps {
    data: ContributionDay[];
}

const GitHubCalendar = ({ data }: GitHubCalendarProps) => {
    const today = new Date();
    const startDate = subDays(today, 364);
    const weeks = 53;

    const contributions = data.map((item) => ({ ...item, date: new Date(item.date).toISOString() }));

    // GitHub Green Scale (Dark Mode)
    const getColor = (count: number) => {
        if (count === 0) return "bg-[#161b22]"; // Empty
        if (count <= 2) return "bg-[#0e4429]";  // Level 1
        if (count <= 5) return "bg-[#006d32]";  // Level 2
        if (count <= 10) return "bg-[#26a641]"; // Level 3
        return "bg-[#39d353]";                  // Level 4
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

                        // We use style for specific hex colors that might not map perfectly to Tailwind classes
                        // But here we use a helper function that returns the class (or style equivalent)
                        const bgClass = getColor(count);

                        return (
                            <div
                                key={index}
                                className={cn("w-3 h-3 rounded-[2px] transition-colors", bgClass)}
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
        <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-zinc-200">GitHub Contributions</h3>
                <div className="text-xs text-zinc-500">Last Year</div>
            </div>
            <div className="flex flex-col gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex gap-1">
                    {renderWeeks()}
                </div>
            </div>
        </div>
    );
};

export { GitHubCalendar };
