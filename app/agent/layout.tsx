import React from "react";
import AgentShell from "./components/AgentShell";

export const metadata = {
  title: "Agent area",
};

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  // keep layout as a Server Component; AgentShell is client-side
  return <AgentShell>{children}</AgentShell>;
}