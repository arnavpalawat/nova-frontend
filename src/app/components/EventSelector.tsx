// components/CategoryButton.tsx
import { ChevronRight } from "lucide-react";

export default function CategoryButton() {
    return (
        <button className="flex items-center gap-2 bg-[#1C1C2E] text-[#A6C8FF] px-4 py-2 rounded-full transition duration-500 hover:scale-110">
            <span className="text-sm">Entrepreneurship</span>
            <ChevronRight className="h-4 w-4" />
        </button>
    );
}
