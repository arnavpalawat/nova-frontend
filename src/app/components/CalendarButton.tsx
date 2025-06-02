// components/CategoryButton.tsx
import { ChevronRight } from "lucide-react";

export default function CalendarButton() {
    return (
        <button className="flex items-center gap-2 bg-[#1C1C2E] text-[#A6C8FF] px-5 py-3 rounded-full animate__animated transition duration-500 hover:scale-110">
            <span className="text-lg">Check Out Your Calendar</span>
            <ChevronRight className="h-8 w-8" />
        </button>
    );
}
