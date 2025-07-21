import { ChevronRight } from "lucide-react";
import {useNavigate} from "react-router-dom";

interface CategoryButtonProps {
    event?: string;
}

export default function CategoryButton({ event }: CategoryButtonProps) {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => event != 'Sign In to Start Studying!' ? navigate("/settings") : navigate("/login")}
            className="flex items-center justify-between gap-3 bg-gray-700/50 text-white px-4 py-3 rounded-2xl transition-all duration-200 ease-in-out hover:bg-gray-600/50 hover:scale-[1.02] border border-gray-600/30"
        >
            <span className="text-sm font-['SF_Pro_Text'] font-medium">{event ? event.toString() : "Select Event"}</span>
            <ChevronRight className="h-4 w-4" />
        </button>
    );
}
