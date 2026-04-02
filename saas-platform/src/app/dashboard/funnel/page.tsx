"use client";

import { useState } from "react";
import { Search, Plus, Filter, TrendingUp, DollarSign, Activity, FileText, ArrowRight, Zap, Target } from "lucide-react";

export default function FunnelBuilderPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [funnelSteps, setFunnelSteps] = useState([
    { id: 1, name: "Cold Traffic Entry", type: "Ad Click", conversion: "100%", dropoff: "0%", status: "active" },
    { id: 2, name: "Landing Page Opt-in", type: "Lead Magnet", conversion: "32%", dropoff: "68%", status: "warning" },
    { id: 3, name: "Email Nurture Sequence", type: "Automation", conversion: "15%", dropoff: "17%", status: "active" },
    { id: 4, name: "Sales Strategy Call", type: "Closing", conversion: "4%", dropoff: "11%", status: "attention" },
  ]);

  const generateFunnel = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            Sales Funnel Architecture <Target className="h-5 w-5 text-blue-600" />
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Visualize, map, and optimize your conversion pathways to maximize revenue.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={generateFunnel}
            disabled={isGenerating}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition disabled:opacity-75"
          >
            {isGenerating ? "Analyzing..." : "Generate Optimal Funnel"}
          </button>
        </div>
      </div>

      {/* High Level Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 text-neutral-500 pb-3">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            <h3 className="text-sm font-medium">Avg. Conversion Rate</h3>
          </div>
          <p className="text-2xl font-bold text-neutral-900">4.2%</p>
          <p className="text-xs text-emerald-600 mt-1 font-medium bg-emerald-50 w-fit px-2 py-0.5 rounded-full">+1.1% vs last month</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 text-neutral-500 pb-3">
            <DollarSign className="h-5 w-5 text-emerald-500" />
            <h3 className="text-sm font-medium">Cost Per Acquisition</h3>
          </div>
          <p className="text-2xl font-bold text-neutral-900">$42.50</p>
          <p className="text-xs text-emerald-600 mt-1 font-medium bg-emerald-50 w-fit px-2 py-0.5 rounded-full">-12% vs last month</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 text-neutral-500 pb-3">
            <Activity className="h-5 w-5 text-purple-500" />
            <h3 className="text-sm font-medium">Pipeline Value</h3>
          </div>
          <p className="text-2xl font-bold text-neutral-900">$184,200</p>
          <p className="text-xs text-emerald-600 mt-1 font-medium bg-emerald-50 w-fit px-2 py-0.5 rounded-full">+24% vs last month</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm flex flex-col justify-between bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div>
             <h3 className="text-sm font-medium text-blue-100 mb-1">AI Recommendation</h3>
             <p className="text-sm font-medium leading-snug">Increase price by 15% on Pro tier. Margin elasticity shows low dropoff risk.</p>
          </div>
          <button className="mt-4 text-xs font-semibold bg-white/20 hover:bg-white/30 transition py-1.5 rounded-md w-full">Apply Strategy</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-full">
        {/* Left Column: Visual Funnel Mapping */}
        <div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
             <h2 className="text-lg font-semibold text-neutral-900">Pipeline Visualization</h2>
             <button className="text-sm text-blue-600 font-semibold hover:text-blue-700">Edit Stages</button>
          </div>
          <div className="flex-1 p-8 overflow-x-auto">
            <div className="max-w-2xl mx-auto space-y-2">
               {funnelSteps.map((step, index) => (
                 <div key={step.id} className="relative">
                   {index !== 0 && (
                     <div className="flex justify-center -my-2 relative z-0">
                       <ArrowRight className="h-8 w-8 text-neutral-300 rotate-90" />
                     </div>
                   )}
                   <div className="relative z-10 flex items-center justify-between p-5 bg-white border border-neutral-200 rounded-xl shadow-sm hover:border-blue-300 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold border border-blue-100">
                           {step.id}
                         </div>
                         <div>
                           <h4 className="font-semibold text-neutral-900">{step.name}</h4>
                           <p className="text-xs text-neutral-500 font-medium">{step.type}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-lg font-bold text-neutral-900">{step.conversion}</div>
                         <div className={`text-xs font-semibold px-2 py-0.5 rounded-md inline-block mt-1 ${
                            step.status === 'warning' ? 'bg-red-50 text-red-600' : 
                            step.status === 'attention' ? 'bg-orange-50 text-orange-600' : 
                            'bg-neutral-100 text-neutral-600'
                         }`}>
                           Dropoff: {step.dropoff}
                         </div>
                      </div>
                   </div>
                 </div>
               ))}
               
               <div className="mt-8 flex justify-center">
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-neutral-300 rounded-lg text-neutral-500 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition font-medium text-sm">
                     <Plus className="h-4 w-4" /> Add Custom Stage
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Offer Builder */}
        <div className="lg:col-span-1 flex flex-col gap-6">
           <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                 <Zap className="h-4 w-4 text-orange-500" /> Conversion Insights
              </h2>
              <div className="space-y-4">
                 <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <h4 className="text-sm font-semibold text-orange-900 mb-1">Critical Bottleneck</h4>
                    <p className="text-xs text-orange-700 leading-relaxed">
                      Your Landing Page Opt-in stage has a 68% dropoff. Adding a low-ticket ($7) tripwire offer here can increase commitment macro-conversions by 14%.
                    </p>
                 </div>
                 <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h4 className="text-sm font-semibold text-blue-900 mb-1">Pricing Strategy</h4>
                    <p className="text-xs text-blue-700 leading-relaxed">
                       Based on competitor analysis, positioning your "Pro" tier as the middle option and adding a "decoy" premium tier will shift 30% of standard prospects to the Pro tier.
                    </p>
                 </div>
              </div>
           </div>

           <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm flex flex-col flex-1">
              <div className="p-5 border-b border-neutral-100">
                 <h2 className="text-lg font-semibold text-neutral-900 relative pr-6">
                   Offer Generator
                   <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                 </h2>
                 <p className="text-xs text-neutral-500 mt-1">Let AI draft your guarantees, bonuses, and risk-reversals.</p>
              </div>
              <div className="p-5 flex-1 flex flex-col items-center justify-center text-center space-y-4 bg-neutral-50/50">
                 <FileText className="h-8 w-8 text-neutral-400" />
                 <p className="text-sm text-neutral-500 font-medium max-w-[200px]">
                   Describe your core product to generate an irresistible offer stack.
                 </p>
                 <input type="text" placeholder="e.g. B2B SaaS for Agencies..." className="w-full text-sm rounded-lg border-neutral-300 focus:ring-blue-500 py-2.5 shadow-sm px-3" />
                 <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white shadow font-semibold text-sm py-2.5 rounded-lg transition">
                    Generate Offer
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
