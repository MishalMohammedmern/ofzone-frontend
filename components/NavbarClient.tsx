"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarClient() {
  const pathname = usePathname() || "";
  // hide global navbar for any route under /agent
  if (pathname.startsWith("/agent")) return null;
  return <Navbar />;
}