import React, { useState } from 'react';

interface DropdownProps {
    label: string;
    options: string[];
    onSelect: (option: string) => void;
}

const CustomDropdownButton: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const handleSelect = (option: string) => {
        setSelected(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#3A3F44] text-white px-6 py-2 rounded-md hover:bg-[#4A4F55] transition w-56"
            >
                {selected || label}
            </button>
            {isOpen && (
                <ul className="absolute mt-2 bg-[#3A3F44] w-56 rounded-md shadow-lg z-10">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 hover:bg-[#4A4F55] text-white cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdownButton;
