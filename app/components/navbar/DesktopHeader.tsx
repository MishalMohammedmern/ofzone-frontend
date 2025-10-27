"use client"
import React, { useState } from 'react'
import { Search, SlidersHorizontal, MapPin, Menu, X } from 'lucide-react';

export default function DesktopHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [location, setLocation] = useState('Kozhikode, Kerala, INDIA');
   
  return (
        <div className="hidden lg:block w-full">
            <div className="flex items-center justify-between py-6 w-full">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold text-red-700">YourLogo</h1>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2">
                    <MapPin />
                    <div>
                        <p className="text-xs text-gray-400">Location</p>
                        <button className="text-sm font-medium flex items-center hover:text-red-700">
                            {location}
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-2xl mx-8">
                    <div className="relative flex items-center">
                        <div className="absolute left-4 pointer-events-none">
                            <Search  />
                        </div>
                        <input
                            type="text"
                            placeholder="Search Your Products"
                            className="w-full bg-zinc-800 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                        />
                        <button className="absolute right-2 bg-red-700 p-2 rounded-md hover:bg-red-800 transition">
                            <SlidersHorizontal  />
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-8">
                    <a href="#" className="hover:text-red-700 transition">
                        Home
                    </a>
                    <a href="#" className="hover:text-red-700 transition">
                        Products
                    </a>
                    <a href="#" className="hover:text-red-700 transition">
                        About
                    </a>
                    <a href="#" className="hover:text-red-700 transition">
                        Contact
                    </a>
                </nav>
            </div>
        </div>
    )
}
