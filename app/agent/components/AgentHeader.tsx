"use client";
import React from "react";

type Props = {
  onToggle?: () => void;
};

export default function AgentHeader({ onToggle }: Props) {
  return (
    // header fixed to top, higher z so it sits above sidebar
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile hamburger */}
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-white"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="text-white">
            <div className="text-xl font-semibold">Dashboard</div>
            <div className="text-xs text-slate-300">Overview of activity and performance</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-slate-800 rounded-full px-3 py-2">
            <svg className="w-4 h-4 text-slate-300 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              className="w-36 sm:w-64 bg-transparent text-sm placeholder-slate-400 text-white outline-none"
              placeholder="Search products, offers..."
              aria-label="Search"
            />
          </div>

          <button className="hidden sm:flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-md shadow">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-sm font-medium">Promote</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-200 hidden sm:block">Kochi, IN</div>
            <div className="w-9 h-9 rounded-full bg-slate-700 overflow-hidden flex items-center justify-center">
              <img src="/avatar-placeholder.png" alt="avatar" width={34} height={34} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}