"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {
  open?: boolean;
  onClose?: () => void;
};

const NAV = [
  { href: "/agent/dashboard", label: "Dashboard" },
  { href: "/agent/offers", label: "Offers" },
  { href: "/agent/products", label: "Products" },
  { href: "/agent/profile", label: "Profile" },
  { href: "/agent/settings", label: "Settings" },
];

export default function Sidebar({ open = false, onClose }: Props) {
  const pathname = usePathname() || "";

  return (
    <>
      {/* mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity lg:hidden h-[80vh] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden
      />

      <div
        className={`fixed left-0 top-0 bottom-0 w-72 h-[100vh] bg-slate-900 text-white z-40 transform transition-transform pt-10 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col px-6 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white">O</div>
            <div>
              <div className="text-sm font-semibold">Offzone</div>
              <div className="text-xs text-slate-300">Agent Portal</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-xl mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700">
              <Image src="/avatar-placeholder.png" alt="agent" width={48} height={48} />
            </div>
            <div>
              <div className="text-sm font-medium">Robert Grant</div>
              <div className="text-xs text-slate-300">Marketing Director</div>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "bg-red-600/20 text-red-600 ring-1 ring-red-600/20"
                      : "text-slate-200 hover:bg-slate-800/50"
                  }`}
                  onClick={onClose}
                >
                  <span className="w-2 h-2 rounded-full bg-red-600/80 opacity-0" aria-hidden />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-6">
            <button className="w-full text-left px-3 py-2 rounded-md text-sm text-red-400 hover:bg-slate-800/50">Log out</button>
          </div>
        </div>
      </div>
    </>
  );
}