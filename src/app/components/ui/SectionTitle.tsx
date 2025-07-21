import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-xl font-semibold dark:text-white text-gray-900 mb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm dark:text-gray-400 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
