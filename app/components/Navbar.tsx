'use client';

import { useState } from 'react';
import MobileHeader from './navbar/MobileHeader';
import DesktopHeader from './navbar/DesktopHeader';

// Icon Components
const Search = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const SlidersHorizontal = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <circle cx="16" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <circle cx="12" cy="18" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
);

const MapPin = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const Menu = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const X = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Navbar() {


    return (
        <nav className="bg-zinc-900 text-white container mx-auto pb-10 lg:pb-0 lg:rounded-3xl">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <MobileHeader />
                <DesktopHeader />
            </div>
        </nav>
    );
}