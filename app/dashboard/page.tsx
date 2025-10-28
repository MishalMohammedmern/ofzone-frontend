"use client";
import StatsCards from "./components/StatsCards";
import RunningOffers from "./components/RunningOffers";
import EndingOffers from "./components/EndingOffers";
import RecentProducts from "./components/RecentProducts";

export default function AgentDashboard() {
  return (
    <div className="space-y-6 bg-gray-100 h-[87vh] p-4 rounded-lg overflow-y-auto">
      <StatsCards />
      
      <div className="grid gap-6 lg:grid-cols-2">
        <RunningOffers />
        <EndingOffers />
      </div>
      
      <RecentProducts />
    </div>
  );
}