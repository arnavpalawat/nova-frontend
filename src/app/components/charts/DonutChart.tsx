import React from "react";

// 3. Donut Chart component
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function DonutChart({ data, colors}) {
    // data = array of numeric values, colors = array of colors, labels = array of labels
    const total = data.reduce((a: number, b: number) => a + b, 0);

    let cumulativePercent = 0;

    const getCoordinatesForPercent = (percent: number) => {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    };

    const createSlice = (percent: number, index: number) => {
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
        cumulativePercent += percent;
        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

        const largeArcFlag = percent > 0.5 ? 1 : 0;

        const pathData = [
            `M ${startX} ${startY}`, // Move to start point
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc to end point
            "L 0 0", // Line back to center
        ].join(" ");

        return (
            <path key={index} d={pathData} fill={colors[index]} stroke="#222" strokeWidth="0.01" />
        );
    };

    return (
        <svg viewBox="-1 -1 2 2" className="w-48 h-48 mx-auto">
            {data.map((value: number) => createSlice(value / total, data.indexOf(value)))}
            <circle cx="0" cy="0" r="0.5" fill="#222" />
        </svg>
    );
}
