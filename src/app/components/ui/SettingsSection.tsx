import React from 'react';

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  title,
  description,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-gray-800/30 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700/30 p-6 transition-all duration-200 ease-in-out ${className}`}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-400 mt-1">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default SettingsSection;
