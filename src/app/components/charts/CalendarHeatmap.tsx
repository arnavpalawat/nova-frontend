import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function CalendarHeatmap({ data }) {
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const monthsMap = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = monthsMap[currentMonthIndex];
    const months = [monthsMap[currentMonthIndex-3], "", monthsMap[currentMonthIndex-2], "", monthsMap[currentMonthIndex-1], "", month];

    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">15 Contributions in 2025</h3>
            <div className="flex flex-col gap-2">
                {data.map((monthData: number[], i: number) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="w-16 text-sm text-[#d5d4f0]">{months[i]}</div>
                        <div className="flex gap-1 ">
                            {monthData.map((val: number, j: number) => (
                                <div
                                    key={j}
                                    className={`w-4 h-4 rounded-md transition duration-500 hover:scale-125 ${
                                        val > 0
                                            ? val > 1
                                                ? "bg-blue-300"
                                                : "bg-blue-100"
                                            : "bg-gray-900"
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
