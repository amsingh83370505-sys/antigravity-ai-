import { Bell, Search, Menu } from "lucide-react";

export default function Topbar({ setIsSidebarOpen }: { setIsSidebarOpen: (val: boolean) => void }) {
  return (
    <div className="flex h-16 md:h-20 shrink-0 items-center justify-between border-b border-neutral-200 bg-white px-4 md:px-8 shadow-sm">
      <div className="flex items-center gap-4 text-neutral-500 w-full max-w-md">
        <button 
          className="md:hidden p-2 -ml-2 text-neutral-600 hover:bg-neutral-100 rounded-md transition" 
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="hidden sm:flex items-center gap-2 w-full">
           <Search className="h-5 w-5 text-neutral-400" />
           <input
             type="text"
             placeholder="Search leads, agents, or settings..."
             className="w-full bg-transparent text-sm placeholder-neutral-400 focus:outline-none focus:ring-0"
           />
        </div>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6">
        <button className="relative text-neutral-400 hover:text-neutral-600 transition p-2">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-neutral-200 pl-4 md:pl-6 cursor-pointer">
          <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold shadow-sm text-sm">
            JD
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-neutral-800">John Doe</p>
            <p className="text-xs text-neutral-500 font-medium tracking-wide">Agency Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
