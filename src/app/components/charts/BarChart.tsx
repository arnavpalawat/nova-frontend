import React from "react";

interface BarChartProps {
    data: number[];
}

export function BarChart({ data }: BarChartProps) {
    const maxVal = Math.max(...data);
    const currentDate = new Date();
    let currentDayIndex = currentDate.getDay();
    const dayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date: string[] = [];
    for (let i = 0; i < 7; i++) {
        date.push(dayMap[currentDayIndex]);
        if (currentDayIndex === 0) {
            currentDayIndex = 6;
        } else {
            currentDayIndex--;
        }
    }
    date.reverse()

    return (
        <div className="w-full max-w-sm h-40 flex items-end gap-1">
            {data.map((val, i) => (
                <div title={val.toString()} className="flex flex-col items-center w-full mx-0.25" key={i}>
                    <div
                        style={{ height: `${(val / maxVal) * 160}px` }}
                        className={`w-full rounded-t-lg transition duration-500 hover:scale-105 ${
                            val > 0.75 * maxVal ? "bg-blue-500" : "bg-gray-500"
                        }`}
                    />
                    <p className="text-gray-300 text-xs mt-1 font-['SF_Pro_Text']">
                        {date[i].slice(0, 3)}
                    </p>
                </div>
            ))}
        </div>
    );
}
