"use client";
import { useState } from "react";
import { Sidebar } from "../components/dashboard/sidebar";
import { Navbar } from "../components/dashboard/navbar";


export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <main className="lg:pl-64 pt-16">
        <div className="container mx-auto p-4 lg:p-6">{children}</div>
      </main>
    </div>
  );
}