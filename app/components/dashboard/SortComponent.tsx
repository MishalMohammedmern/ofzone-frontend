'use client';

import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SortOption {
  label: string;
  value: string;
}

interface SortComponentProps {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
}

export const SortComponent: React.FC<SortComponentProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedLabel = options.find((opt) => opt.value === value)?.label || 'Sort';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-all"
      >
        <ArrowUpDown size={16} className="text-gray-400" />
        <span className="text-sm font-medium text-gray-700">{selectedLabel}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-all ${
                value === option.value
                  ? 'bg-indigo-50 text-indigo-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};