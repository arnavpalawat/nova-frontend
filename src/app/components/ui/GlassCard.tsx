import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`
        dark:bg-gray-800/30 bg-gray-200/80 backdrop-blur-md rounded-2xl shadow-lg border dark:border-gray-700/30 border-gray-300/50
        p-6 transition-all duration-200 ease-in-out
        ${hover ? 'hover:scale-[1.02] dark:hover:bg-gray-800/40 hover:bg-gray-300/90 dark:hover:border-gray-600/40 hover:border-gray-400/60' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
