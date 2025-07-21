import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface EventSelectorDropdownProps {
  selectedEvent: string;
  onEventChange: (event: string) => void;
}

const EventSelectorDropdown: React.FC<EventSelectorDropdownProps> = ({
  selectedEvent,
  onEventChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const events = [
    "Business Administration Core",
    "Business Management and Administration",
    "Entrepreneurship",
    "Finance",
    "Hospitality and Tourism",
    "Marketing",
    "Personal Financial Literacy"
  ];

  const handleEventSelect = (event: string) => {
    onEventChange(event);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 rounded-xl dark:bg-gray-800/50 bg-gray-300/50 border dark:border-gray-700/50 border-gray-400/50 transition-all duration-200"
      >
        <span className="dark:text-gray-200 text-gray-800 font-['SF_Pro_Text']">
          {selectedEvent}
        </span>
        <ChevronDown
          className={`w-4 h-4 dark:text-gray-400 text-gray-600 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <>
          {/* Overlay to close dropdown when clicking outside */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 mt-1 dark:bg-gray-800 bg-gray-200 rounded-xl border dark:border-gray-700/50 border-gray-400/50 shadow-xl z-[9999] overflow-hidden max-h-60 overflow-y-auto">
            {events.map((event) => (
              <button
                key={event}
                onClick={() => handleEventSelect(event)}
                className={`w-full text-left p-3 transition-all duration-200 font-['SF_Pro_Text'] text-sm ${
                  event === selectedEvent
                    ? 'dark:bg-blue-500/20 bg-blue-500/20 dark:text-blue-400 text-blue-600'
                    : 'dark:text-gray-200 text-gray-800 dark:hover:bg-gray-700/50 hover:bg-gray-300/50'
                }`}
              >
                {event}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EventSelectorDropdown;
