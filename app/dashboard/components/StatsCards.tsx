import { Card } from "@/components/ui/card";

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="relative overflow-hidden bg-purple-600 text-white">
        <div className="absolute right-0 top-0 h-full w-32 bg-purple-700/50" />
        <div className="relative p-6">
          <h3 className="text-sm font-medium text-purple-100">Active Products</h3>
          <p className="text-2xl font-bold mt-2">42</p>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-purple-100">10 tasks</span>
            <span className="mx-2">•</span>
            <span className="text-purple-100">96%</span>
          </div>
        </div>
      </Card>

      <Card className="relative overflow-hidden bg-cyan-500 text-white">
        <div className="absolute right-0 top-0 h-full w-32 bg-cyan-600/50" />
        <div className="relative p-6">
          <h3 className="text-sm font-medium text-cyan-50">Running Offers</h3>
          <p className="text-2xl font-bold mt-2">6</p>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-cyan-50">12 tasks</span>
            <span className="mx-2">•</span>
            <span className="text-cyan-50">40%</span>
          </div>
        </div>
      </Card>

      <Card className="relative overflow-hidden bg-orange-500 text-white">
        <div className="absolute right-0 top-0 h-full w-32 bg-orange-600/50" />
        <div className="relative p-6">
          <h3 className="text-sm font-medium text-orange-50">Profile Completion</h3>
          <p className="text-2xl font-bold mt-2">85%</p>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-orange-50">22 tasks</span>
            <span className="mx-2">•</span>
            <span className="text-orange-50">71%</span>
          </div>
        </div>
      </Card>
    </div>
  );
}