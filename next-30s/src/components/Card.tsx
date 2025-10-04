import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

export default function Card({ title, description, imageUrl, className = '' }: CardProps) {
  return (
    <div className={`group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 overflow-hidden ${className}`}>
      {imageUrl && (
        <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}