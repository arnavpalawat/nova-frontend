import React from 'react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 'md',
    text = 'Loading...',
    className = ''
}) => {
    const sizeClasses = {
        sm: 'h-6 w-6 border-2',
        md: 'h-12 w-12 border-4',
        lg: 'h-16 w-16 border-4'
    };

    const containerClasses = {
        sm: 'h-20',
        md: 'h-40',
        lg: 'h-60'
    };

    return (
        <div className={`flex justify-center items-center ${containerClasses[size]} w-full ${className}`}>
            <div className="flex flex-col items-center gap-4">
                <div className={`animate-spin rounded-full ${sizeClasses[size]} dark:border-white border-gray-900 border-t-transparent transition-all duration-200`} />
                {text && (
                    <p className="text-center dark:text-white text-gray-900 font-['SF_Pro_Text'] text-sm">
                        {text}
                    </p>
                )}
            </div>
        </div>
    );
};

export default LoadingSpinner;
