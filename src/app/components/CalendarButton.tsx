// components/CategoryButton.tsx
import { ChevronRight } from "lucide-react";

export default function CalendarButton() {
    return (
        <button className="flex items-center justify-between gap-4 bg-gray-700/50 text-white px-6 py-4 rounded-2xl transition-all duration-200 ease-in-out hover:bg-gray-600/50 hover:scale-[1.02] border border-gray-600/30 w-full">
            <span className="text-base font-['SF_Pro_Text'] font-medium">Check Out Your Calendar</span>
            <ChevronRight className="h-5 w-5" />
        </button>
    );
}
