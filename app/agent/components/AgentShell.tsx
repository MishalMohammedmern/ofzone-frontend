"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AgentHeader from "./AgentHeader";

export default function AgentShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="max-h-screen bg-amber-50/10">
      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 min-h-screen flex flex-col lg:pl-0">
          <AgentHeader onToggle={() => setSidebarOpen((s) => !s)} />
          <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}