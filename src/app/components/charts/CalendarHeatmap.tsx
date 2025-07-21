import React from 'react'

interface CalendarHeatmapProps {
    data: number[][];
}

export function CalendarHeatmap({ data }: CalendarHeatmapProps) {
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const monthsMap = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = monthsMap[currentMonthIndex];
    const months = [monthsMap[currentMonthIndex-3], "", monthsMap[currentMonthIndex-2], "", monthsMap[currentMonthIndex-1], "", month];
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            total += data[i][j];
        }
    }
    return (
        <div>
            <h3 className="text-lg mb-4 text-white font-['SF_Pro_Text']">{total} Flashcards in the Last 4 Months</h3>
            <div className="flex flex-col gap-2">
                {data.map((monthData: number[], i: number) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="w-16 text-sm text-gray-300 font-['SF_Pro_Text']">{months[i]}</div>
                        <div className="flex gap-1">
                            {monthData.map((val: number, j: number) => (
                                <div
                                    key={j}
                                    className={`w-3 h-3 rounded-md transition duration-200 hover:scale-125 ${
                                        val > 0
                                            ? val > 1
                                                ? "bg-blue-500"
                                                : "bg-blue-300"
                                            : "bg-gray-700"
                                    }`}
                                    title={`Day ${j + 1}, Contributions: ${val}`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
