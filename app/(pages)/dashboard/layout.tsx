import React from "react";
import { DashboardSidebar } from "@/components/ui/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col md:ml-0 pt-16 md:pt-0 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
