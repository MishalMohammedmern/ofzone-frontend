'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface SearchComponentProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
}) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
      <Search size={18} className="text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 outline-none text-sm text-gray-700"
      />
    </div>
  );
};