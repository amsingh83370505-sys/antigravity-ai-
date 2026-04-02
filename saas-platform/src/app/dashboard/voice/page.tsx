"use client";

import { useState } from "react";
import { PhoneCall, Mic, Settings, Play, PhoneForwarded, History, ShieldAlert, Plus } from "lucide-react";

export default function VoiceAgentDashboard() {
  const [activeTab, setActiveTab] = useState("config");
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+1 (555) 019-8372");

  const handleProvision = () => {
    setIsProvisioning(true);
    setTimeout(() => {
      setPhoneNumber("+1 (800) 555-" + Math.floor(1000 + Math.random() * 9000));
      setIsProvisioning(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            AI Voice Operators <PhoneCall className="h-5 w-5 text-purple-600" />
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Deploy human-like voice agents to handle inbound sales and outbound follow-ups.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-purple-700 transition">
          <Play className="h-4 w-4 fill-current" /> Initialize Campaign
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-14rem)] min-h-[600px]">
        {/* Left Column: Number & Routing */}
        <div className="lg:col-span-1 rounded-2xl border border-neutral-200 bg-white shadow-sm flex flex-col overflow-hidden">
          <div className="p-5 border-b border-neutral-100 bg-neutral-50 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
              <PhoneForwarded className="h-5 w-5 text-neutral-500" /> Routing
            </h2>
          </div>
          <div className="p-5 space-y-6 flex-1 overflow-y-auto">
            <div>
               <label className="block text-sm font-medium text-neutral-700 mb-2">Assigned Twilio Number</label>
               <div className="flex items-center justify-between p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
                  <span className="font-mono text-lg font-semibold text-neutral-900">{phoneNumber}</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">
                     Active
                  </span>
               </div>
               <button 
                 onClick={handleProvision}
                 disabled={isProvisioning}
                 className="mt-3 w-full py-2 text-sm font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-lg transition border border-purple-100 disabled:opacity-50"
               >
                 {isProvisioning ? "Provisioning..." : "Provision New Number"}
               </button>
            </div>
            
            <hr className="border-neutral-100" />

            <div>
               <label className="block text-sm font-medium text-neutral-700 mb-2">Call Forwarding (Fallback)</label>
               <input type="text" placeholder="+1 (Your Cell Number)" className="w-full text-sm rounded-lg border-neutral-300 focus:ring-purple-500 py-2.5 shadow-sm px-3" />
               <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                 If the AI cannot answer a highly complex question, it will smoothly transfer the call to this number.
               </p>
            </div>
          </div>
        </div>

        {/* Right Column: AI Scripting & Params */}
        <div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white shadow-sm flex flex-col overflow-hidden">
          <div className="flex border-b border-neutral-200">
            <button 
              onClick={() => setActiveTab("config")}
              className={`flex-1 py-4 text-sm font-medium border-b-2 flex items-center justify-center gap-2 transition-colors ${activeTab === "config" ? "border-purple-600 text-purple-600" : "border-transparent text-neutral-500 hover:text-neutral-700"}`}
            >
              <Mic className="h-4 w-4" /> Voice Synthesis
            </button>
            <button 
              onClick={() => setActiveTab("script")}
              className={`flex-1 py-4 text-sm font-medium border-b-2 flex items-center justify-center gap-2 transition-colors ${activeTab === "script" ? "border-purple-600 text-purple-600" : "border-transparent text-neutral-500 hover:text-neutral-700"}`}
            >
              <Settings className="h-4 w-4" /> Script & Objections
            </button>
            <button 
              onClick={() => setActiveTab("history")}
              className={`flex-1 py-4 text-sm font-medium border-b-2 flex items-center justify-center gap-2 transition-colors ${activeTab === "history" ? "border-purple-600 text-purple-600" : "border-transparent text-neutral-500 hover:text-neutral-700"}`}
            >
              <History className="h-4 w-4" /> Call Logs
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-neutral-50/30 p-6">
            {activeTab === "config" && (
              <div className="max-w-xl space-y-8">
                 <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">Select Voice Model</label>
                    <div className="grid grid-cols-2 gap-4">
                       <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none border-purple-500 ring-1 ring-purple-500">
                          <span className="flex flex-1">
                             <span className="flex flex-col">
                                <span className="block text-sm font-medium text-neutral-900">Marcus (Deep)</span>
                                <span className="mt-1 flex items-center text-sm text-neutral-500">Excellent for enterprise B2B sales.</span>
                             </span>
                          </span>
                          <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                       </label>
                       <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none border-neutral-300 hover:border-neutral-400">
                          <span className="flex flex-1">
                             <span className="flex flex-col">
                                <span className="block text-sm font-medium text-neutral-900">Sarah (Warm)</span>
                                <span className="mt-1 flex items-center text-sm text-neutral-500">Perfect for inbound support & nurturing.</span>
                             </span>
                          </span>
                       </label>
                    </div>
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">Speech Pace & Latency</label>
                    <input type="range" min="1" max="100" defaultValue="45" className="w-full accent-purple-600" />
                    <div className="flex justify-between text-xs text-neutral-500 mt-1">
                       <span>Slow & Thoughtful</span>
                       <span>Fast & Energetic</span>
                    </div>
                 </div>
              </div>
            )}

            {activeTab === "script" && (
              <div className="space-y-6">
                 <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">Opening Hook</label>
                    <textarea 
                       rows={2} 
                       defaultValue="Hi! This is Marcus from Antigravity. I noticed you just submitted a demo request online—do you have 2 minutes to chat about your current setup?"
                       className="block w-full rounded-md border-0 py-2 px-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm"
                    ></textarea>
                 </div>
                 
                 <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">Objection Handling Arsenal</label>
                    <div className="space-y-3">
                       <div className="p-4 bg-white border border-neutral-200 rounded-xl relative group">
                          <ShieldAlert className="h-4 w-4 text-orange-500 absolute top-4 right-4" />
                          <h4 className="text-sm font-semibold text-neutral-800 mb-1">If client says: <span className="font-normal text-neutral-600 tracking-wide">"It's too expensive"</span></h4>
                          <p className="text-xs text-neutral-600 leading-relaxed bg-neutral-50 p-2 rounded border border-neutral-100">
                             "I totally understand. If it helps, our average client makes back their investment in the first 14 days just from recovered abandoned leads. Would you be open to a risk-free trial so you can see the hard numbers?"
                          </p>
                       </div>
                       <button className="flex items-center gap-2 text-sm text-purple-600 font-medium hover:text-purple-700">
                          <Plus className="h-4 w-4" /> Add Objection Rule
                       </button>
                    </div>
                 </div>
              </div>
            )}
            
            {activeTab === "history" && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 pt-10">
                    <div className="p-4 bg-neutral-100 rounded-full text-neutral-400">
                       <History className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">No Calls Logged Yet</h3>
                    <p className="text-neutral-500 max-w-sm text-sm">
                      Once you initialize the campaign or receive inbound calls to your Twilio number, full transcripts and recordings will appear here.
                    </p>
                </div>
            )}
          </div>
          
          <div className="p-4 border-t border-neutral-200 bg-white flex justify-end gap-3">
             <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50">Discard Options</button>
             <button className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800">Save Blueprint</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
