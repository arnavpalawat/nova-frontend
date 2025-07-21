import { BarChart } from "@/app/components/charts/BarChart";
import { DonutChart } from "@/app/components/charts/DonutChart";
import { CalendarHeatmap } from "@/app/components/charts/CalendarHeatmap";
import GlassCard from "@/app/components/ui/GlassCard";
import SectionTitle from "@/app/components/ui/SectionTitle";

export default function Dashboard() {
    const barData = [3, 6, 4, 10, 7, 1, 8];
    const calendarData = [
        [0, 0, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1], // Jan
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], // Jan
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Feb
        [1, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // Feb
        [0, 0, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1], // Mar
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], // Mar
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Apr
        [1, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // Apr
    ];
    const donut1Data = [60, 40];
    const donut2Data = [30, 70];
    const donutColors = ["#6b7280", "#3b82f6"]; // Changed to gray and blue

    return (
        <div className="space-y-6">
            <SectionTitle
                title="Analytics Dashboard"
                subtitle="Your learning insights and progress"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Weekly Progress Chart */}
                <GlassCard hover className="lg:col-span-1 flex flex-col">
                    <h3 className="mb-4 text-lg font-semibold text-white text-center">This Week in NOVA</h3>
                    <div className="flex-1 flex items-center justify-center py-4">
                        <BarChart data={barData} />
                    </div>
                </GlassCard>

                {/* Calendar Heatmap */}
                <GlassCard hover className="lg:col-span-1 flex flex-col">
                    <h3 className="mb-4 text-lg font-semibold text-white text-center">Calendar Heatmap</h3>
                    <div className="flex-1 flex items-center justify-center">
                        <CalendarHeatmap data={calendarData} />
                    </div>
                </GlassCard>

                {/* Core Areas */}
                <GlassCard hover className="lg:col-span-1 flex flex-col">
                    <h3 className="mb-4 text-lg font-semibold text-white text-center">Core Instructional Areas</h3>
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                        <DonutChart data={donut1Data} colors={donutColors} label={"Product-Service Marketing"} />
                        <DonutChart data={donut2Data} colors={donutColors} label={"Promotion"} />
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
