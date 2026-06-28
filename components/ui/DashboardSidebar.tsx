"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/img/logo-relingga.png";
import { useLogout } from "@/app/hook/query/useLogout";
import { useGetMe } from "@/app/hook/query/useGetMe";
import {
  IconLayoutDashboard,
  IconBriefcase,
  IconCode,
  IconCertificate,
  IconMenu2,
  IconX,
  IconLogout
} from "@tabler/icons-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard/home", icon: IconLayoutDashboard },
  { name: "Projects", href: "/dashboard/createProject", icon: IconBriefcase },
  { name: "Skills", href: "/dashboard/createSkills", icon: IconCode },
  { name: "Certificates", href: "/dashboard/createCerti", icon: IconCertificate },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const logoutMutation = useLogout();
  const { data: user, isLoading } = useGetMe();

  const getInitials = (username: string) => {
    if (!username) return "U";
    return username.substring(0, 2).toUpperCase();
  };

  return (
    <>
      {/* Mobile Header & Toggle */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-xl border-b border-white/10 z-50 flex items-center justify-between px-4">
        <Link href="/dashboard/home">
          <Image
            src={logo}
            alt="Relingga Aditya Logo"
            width={250}
            height={100}
            className="h-20 w-auto scale-110"
            priority
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white/70 hover:text-white transition-colors"
        >
          {isOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </div>

      {/* Sidebar Desktop & Mobile */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-black border-r border-white/10 z-40 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 hidden md:flex items-center justify-center border-b border-white/5 pb-8 mb-4">
          <Link href="/dashboard/home">
            <Image
              src={logo}
              alt="Relingga Aditya Logo"
              width={400}
              height={150}
              className="h-32 w-auto scale-125 origin-center"
              priority
            />
          </Link>
        </div>

        <nav className="flex-1 mt-16 md:mt-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black font-medium"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 mt-auto">
          <div className="flex items-center justify-between bg-white/5 border border-white/10 p-2 rounded-2xl transition-colors hover:border-white/20">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm tracking-wider">
                  {isLoading ? "..." : getInitials(user?.username)}
                </span>
              </div>
              <div className="flex flex-col overflow-hidden pr-2">
                <span className="text-sm font-semibold text-white truncate">
                  {isLoading ? "Loading..." : (user?.username || "Guest")}
                </span>
                <span className="text-xs text-white/40 truncate">Administrator</span>
              </div>
            </div>
            <button
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              className="p-2 text-white/50 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all shrink-0 cursor-pointer disabled:opacity-50"
              title="Logout"
            >
              <IconLogout className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
