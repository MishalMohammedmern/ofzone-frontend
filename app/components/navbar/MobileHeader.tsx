"use client"
import React, { useState } from 'react'
import { Search, SlidersHorizontal, MapPin, Menu, X } from 'lucide-react';

export default function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [location, setLocation] = useState('Kozhikode, Kerala, INDIA');
    return (
           <div className="lg:hidden">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <button className="text-sm font-medium flex items-center">
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
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-zinc-800"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="pb-4">
            <div className="relative flex items-center">
              <div className="absolute left-4 pointer-events-none">
                <Search />
              </div>
              <input
                type="text"
                placeholder="Search Your Products"
                className="w-full bg-zinc-800 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              <button className="absolute right-2 bg-red-700 p-2 rounded-md hover:bg-red-800">
                <SlidersHorizontal />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="py-4 border-t border-zinc-800">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="block hover:text-red-700">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-red-700">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-red-700">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-red-700">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-red-700">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
    )
}


