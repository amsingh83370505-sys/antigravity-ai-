"use client";

import { useState } from "react";
import { Sparkles, Mail, MessageCircle, Share2, Globe, ArrowRight, Copy, CheckCircle2 } from "lucide-react";

export default function LeadGenDashboard() {
  const [activeTab, setActiveTab] = useState("outreach");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const mockStrategies = [
    { platform: "LinkedIn Outreach", copy: 'Hey [Name],\n\nLoved your recent post on [Topic]. We help companies like [Company] automate their lead acquisition using voice agents, cutting SDR costs by 60%.\n\nOpen to a quick 5-min chat next Tuesday?' },
    { platform: "Cold Email Sequence", copy: 'Subject: Faster operations for [Company]\n\nHi [Name],\n\nI noticed you are scaling the team. Most agencies struggle with response times when lead volume spikes.\n\nOur AI handles initial qualification so your closers only speak to warm prospects. Worth exploring?' },
    { platform: "Instagram DM", copy: 'Hey [Name]! Following your journey - love the content! 🔥 Quick question, are you guys using AI to manage your DMs yet? We set up a flow for [Competitor] that booked 14 calls last week. Let me know if you want to see how it works.' }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const generateNewStrategy = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            AI Lead Engine <Sparkles className="h-5 w-5 text-blue-600" />
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Generate high-converting outreach scripts, landing page copy, and ad strategies on demand.
          </p>
        </div>
        <button 
          onClick={generateNewStrategy}
          disabled={isGenerating}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition disabled:opacity-75"
        >
          {isGenerating ? "Generating Strategies..." : "Generate New Strategy"}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Navigation / Filters Sidebar */}
        <div className="lg:col-span-1 space-y-2">
           <button 
             onClick={() => setActiveTab('outreach')}
             className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition ${activeTab === 'outreach' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'text-neutral-600 hover:bg-neutral-50 border border-transparent'}`}
           >
             <div className="flex items-center gap-3">
               <Mail className="h-4 w-4" /> Cold Outreach
             </div>
             <ArrowRight className="h-4 w-4 opacity-50" />
           </button>
           <button 
             onClick={() => setActiveTab('whatsapp')}
             className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition ${activeTab === 'whatsapp' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'text-neutral-600 hover:bg-neutral-50 border border-transparent'}`}
           >
             <div className="flex items-center gap-3">
               <MessageCircle className="h-4 w-4" /> WhatsApp Funnels
             </div>
             <ArrowRight className="h-4 w-4 opacity-50" />
           </button>
           <button 
             onClick={() => setActiveTab('instagram')}
             className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition ${activeTab === 'instagram' ? 'bg-pink-50 text-pink-700 border border-pink-100' : 'text-neutral-600 hover:bg-neutral-50 border border-transparent'}`}
           >
             <div className="flex items-center gap-3">
               <Share2 className="h-4 w-4" /> Instagram Ads
             </div>
             <ArrowRight className="h-4 w-4 opacity-50" />
           </button>
           <button 
             onClick={() => setActiveTab('landing')}
             className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition ${activeTab === 'landing' ? 'bg-purple-50 text-purple-700 border border-purple-100' : 'text-neutral-600 hover:bg-neutral-50 border border-transparent'}`}
           >
             <div className="flex items-center gap-3">
               <Globe className="h-4 w-4" /> Landing Page Copy
             </div>
             <ArrowRight className="h-4 w-4 opacity-50" />
           </button>
        </div>

        {/* Core Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm min-h-[500px] p-6">
            
            {activeTab === 'outreach' && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 fade-in">
                <div className="border-b border-neutral-100 pb-4 mb-6">
                  <h2 className="text-lg font-semibold text-neutral-900">Highest Converting Scripts</h2>
                  <p className="text-sm text-neutral-500">Trained on $5M+ of successful B2B enterprise outreach data.</p>
                </div>
                
                <div className="space-y-6">
                  {mockStrategies.map((strategy, index) => (
                    <div key={index} className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
                       <div className="bg-neutral-100/80 px-4 py-3 border-b border-neutral-200 flex justify-between items-center">
                          <span className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
                             <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                             {strategy.platform}
                          </span>
                          <button 
                            onClick={() => handleCopy(strategy.copy, index)}
                            className="text-neutral-400 hover:text-blue-600 transition flex items-center gap-1 text-xs font-medium"
                          >
                            {copiedIndex === index ? (
                               <><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Copied</>
                            ) : (
                               <><Copy className="h-4 w-4" /> Copy script</>
                            )}
                          </button>
                       </div>
                       <div className="p-5 text-sm text-neutral-800 whitespace-pre-wrap font-sans leading-relaxed">
                          {strategy.copy}
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab !== 'outreach' && (
               <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20 animate-in fade-in duration-500">
                  <div className="p-4 bg-neutral-100 rounded-full text-neutral-400">
                     <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 capitalize">{activeTab} Modules Processing</h3>
                  <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
                    Analyzing market trends... this specific AI generator module is connecting to our data lakes and will be available once your API keys are synced.
                  </p>
               </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
