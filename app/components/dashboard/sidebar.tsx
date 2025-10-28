"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  Settings,
  X
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard/agent", icon: Home },
  { name: "Products", href: "/dashboard/products", icon: Package },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-64 transform bg-[#0B1325] transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold">O</span>
            </div>
            <span className="text-lg font-semibold text-white">Offzone</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-10 px-4 lg:px-6">
          <div className="rounded-lg bg-gray-900/50 p-4">
            <div className="flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-700">
                <img
                  src="/avatar-placeholder.png"
                  alt="Profile"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div  className=" flex flex-col items-center">
                <div className="text-sm font-medium text-white">John Doe</div>
                <div className="text-xs text-gray-400">Agent</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3 flex-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-[20px] transition-colors mb-1",
                  isActive
                    ? "bg-blue-500/10 text-red-500"
                    : "text-gray-400 hover:bg-gray-800/50 hover:text-red-500"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}