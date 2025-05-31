import React from "react";

interface BarChartProps {
    data: number[];
}

export function BarChart({ data }: BarChartProps) {
    const maxVal = Math.max(...data);
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const dayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = dayMap[currentDayIndex];
    const date = [dayMap[currentDayIndex-6], dayMap[currentDayIndex-5],dayMap[currentDayIndex-4],dayMap[currentDayIndex-3], dayMap[currentDayIndex-2], dayMap[currentDayIndex-1], day];
    return (
            <div className="w-full max-w-sm h-40 flex items-end gap-1">
                {data.map((val, i) => (
                    <div className="flex flex-col items-center w-full mx-0.25" key={i}>
                        <div
                            style={{ height: `${(val / maxVal) * 160}px` }}
                            className={`w-full rounded-t-lg transition duration-500 hover:scale-105 ${
                                val > 0.75 * maxVal ? "bg-[#5c5d8c]" : "bg-[#b5e3f2]"
                            }`}
                        />

                        <p className={'text-[#e4e2f8]'}>
                            {date[i]}
                        </p>
                    </div>

                ))}
            </div>
    );
}
