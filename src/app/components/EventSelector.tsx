import { ChevronRight } from "lucide-react";

interface CategoryButtonProps {
    event?: string;
}

export default function CategoryButton({ event }: CategoryButtonProps) {
    return (
        <button className="flex items-center gap-2 bg-[#1C1C2E] text-[#A6C8FF] px-4 py-2 rounded-full animate__animated transition duration-500 hover:scale-110">
            <span className="text-sm">{event ? event.toString() : "Select Event"}</span>
            <ChevronRight className="h-4 w-4" />
        </button>
    );
}
