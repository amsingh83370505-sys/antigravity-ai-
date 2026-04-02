import { ArrowUpRight, Users, MessageSquare, PhoneCall } from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    { name: "Total Leads", value: "2,543", change: "+12.5%", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "Active Chats", value: "142", change: "+5.2%", icon: MessageSquare, color: "text-emerald-600", bg: "bg-emerald-100" },
    { name: "Voice Calls Made", value: "845", change: "+28.4%", icon: PhoneCall, color: "text-purple-600", bg: "bg-purple-100" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Welcome back, here's what's happening with your AI agents today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 text-sm font-medium text-neutral-500">
              <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="truncate">{stat.name}</p>
            </div>
            <div className="mt-4 flex items-baseline gap-4">
              <p className="text-3xl font-semibold text-neutral-900">{stat.value}</p>
              <p className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm flex flex-col h-96">
          <h2 className="text-lg font-semibold text-neutral-900 mb-6">Recent Lead Activity</h2>
          <div className="flex-1 flex items-center justify-center border-2 border-dashed border-neutral-200 rounded-xl">
             <p className="text-sm text-neutral-400">Activity chart will render here</p>
          </div>
        </div>
        
        <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm flex flex-col h-96">
          <h2 className="text-lg font-semibold text-neutral-900 mb-6">AI Agent Performance</h2>
          <div className="flex-1 flex items-center justify-center border-2 border-dashed border-neutral-200 rounded-xl">
             <p className="text-sm text-neutral-400">Heatmap will render here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
