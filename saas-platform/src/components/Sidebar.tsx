"use client";

import Link from "next/link";
import { Home, Users, BarChart, Settings, Bot, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();
  
  const routes = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "CRM (Leads)", path: "/dashboard/crm", icon: Users },
    { name: "AI Lead Engine", path: "/dashboard/lead-gen", icon: Bot },
    { name: "Chatbot Builder", path: "/dashboard/chatbot", icon: Users },
    { name: "Voice Agents", path: "/dashboard/voice", icon: Phone },
    { name: "Funnel Analysis", path: "/dashboard/funnel", icon: BarChart },
    { name: "Settings", path: "/dashboard/settings/pricing", icon: Settings },
  ];

  return (
    <>
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50 flex h-screen w-64 flex-col bg-neutral-900 text-white shadow-xl transition-transform duration-300 ease-in-out`}>
        <div className="flex h-20 items-center justify-between px-6 border-b border-neutral-800">
          <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-xl font-bold text-transparent truncate">
            Antigravity.AI
          </h1>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-neutral-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex-1 space-y-2 px-4 py-6 overflow-y-auto">
          {routes.map((route) => {
            const isActive = pathname === route.path || (pathname?.startsWith(route.path) && route.path !== '/dashboard');
            return (
              <Link
                key={route.name}
                href={route.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? "bg-neutral-800 text-white border border-neutral-700 shadow-sm" : "text-neutral-300 hover:bg-neutral-800 hover:text-white border border-transparent"
                }`}
              >
                <route.icon className={`h-5 w-5 ${isActive ? 'text-blue-400' : ''}`} />
                {route.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4">
          <div className="rounded-xl border border-neutral-800 bg-neutral-800/50 p-4 shadow-inner">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Pro Plan</p>
            <p className="text-sm text-neutral-200">14 days remaining</p>
            <Link href="/dashboard/settings/pricing">
              <button onClick={() => setIsOpen(false)} className="mt-3 w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition">
                Upgrade
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-40 md:hidden" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </>
  );
}
