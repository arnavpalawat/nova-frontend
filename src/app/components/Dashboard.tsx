import { BarChart } from "@/app/components/charts/BarChart";
import { DonutChart } from "@/app/components/charts/DonutChart";
import { CalendarHeatmap } from "@/app/components/charts/CalendarHeatmap";

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
    const donutColors = ["#565f8a", "#bae3f8"];

    return (
        <div className="p-8 bg-[#2F3438] text-[#e4e2f8] justify-evenly w-full my-20 animate__animated animate__fadeInUp duration-25 fast">
            <div className="flex gap-8">
                <section className="flex-1">
                    <h2 className="mb-4 text-xl font-semibold">This Week in NOVA</h2>
                    <div className={'py-5'}>
                        <BarChart data={barData} />
                    </div>
                </section>
                <section className="flex-1">
                    <h2 className="mb-4 text-xl font-semibold">Calendar Heatmap</h2>
                    <CalendarHeatmap data={calendarData} />
                </section>
                <section className="flex-1 ">
                    <h2 className="mb-4 text-xl font-semibold">Core Instructional Areas</h2>
                    <div className={"float-left my-1"}>
                        <DonutChart data={donut1Data} colors={donutColors} label={"Product-Service Marketing"}/>
                    </div>
                    <div className={"float-left px-2.5 my-1"}>
                        <DonutChart data={donut2Data} colors={donutColors}  label={"Promotion"}/>
                    </div>
                </section>
            </div>
        </div>
    );
}
