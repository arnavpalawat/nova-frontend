import React from 'react';
import { COLORS, LAYOUT, TYPOGRAPHY } from '@/app/constants/theme';

interface ToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
  label: string;
}

const Toggle: React.FC<ToggleProps> = ({ isEnabled, onToggle, label }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl dark:bg-gray-800/50 bg-gray-300/50 border dark:border-gray-700/50 border-gray-400/50">
      <span className="dark:text-gray-200 text-gray-800 font-['SF_Pro_Text']">{label}</span>
      <button
        onClick={onToggle}
        className={`w-12 h-6 rounded-full transition-all duration-200 relative ${
          isEnabled ? 'bg-blue-500' : 'dark:bg-gray-600 bg-gray-400'
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-200 ${
            isEnabled ? 'right-0.5' : 'left-0.5'
          }`}
        />
      </button>
    </div>
  );
};

export default Toggle;
