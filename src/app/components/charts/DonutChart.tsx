import React from "react";

interface DonutChartProps {
    data: number[];
    colors: string[];
    label: string;
}

export function DonutChart({ data, colors, label }: DonutChartProps) {
    const total = data.reduce((a: number, b: number) => a + b, 0);

    let cumulativePercent = 0;

    const getCoordinatesForPercent = (percent: number) => {
        const x = parseFloat(Math.cos(2 * Math.PI * percent).toFixed(6));
        const y = parseFloat(Math.sin(2 * Math.PI * percent).toFixed(6));
        return [x, y];
    };

    const createSlice = (percent: number, index: number) => {
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
        cumulativePercent += percent;
        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

        const largeArcFlag = percent > 0.5 ? 1 : 0;

        const pathData = [
            `M ${startX} ${startY}`,
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            "L 0 0",
        ].join(" ");

        return (
            <path key={index} d={pathData} fill={colors[index]} stroke="#374151" strokeWidth="0.01" />
        );
    };

    return (
        <div className="flex flex-col items-center">
            <svg viewBox="-1 -1 2 2" className="w-32 h-32">
                {data.map((value: number, index: number) => createSlice(value / total, index))}
                <circle cx="0" cy="0" r="0.5" fill="#374151" />
            </svg>
            <p className="text-sm text-gray-300 mt-2 font-['SF_Pro_Text'] text-center">{label}</p>
        </div>
    );
}
