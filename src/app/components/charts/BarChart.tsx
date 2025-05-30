import React from "react";

interface BarChartProps {
    data: number[];
}

export function BarChart({ data }: BarChartProps) {
    const maxVal = Math.max(...data);

    return (
        <div className="w-full max-w-sm h-40 flex items-end gap-1">
            {data.map((val, i) => (
                <div
                    key={i}
                    style={{ height: `${(val / maxVal) * 100}%` }}
                    className={`flex-1 rounded-t-lg transition duration-500 hover:scale-110 ${
                        i % 2 === 0 ? "bg-blue-300" : "bg-gray-400"
                    }`}
                    title={`Value: ${val}`}
                />
            ))}
        </div>
    );
}
