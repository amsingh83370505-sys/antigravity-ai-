import Link from "next/link";
import { Zap, ShieldCheck, Play, ArrowRight, Activity, Crosshair, BarChart3, Fingerprint } from "lucide-react";

export default function Premium3DLandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-cyan-500/30 overflow-x-hidden text-neutral-200">
      
      {/* 3D Grid Floor & Dynamic Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none perspective-[1000px] overflow-hidden">
        {/* Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-700/15 rounded-full blur-[180px]"></div>
        
        {/* 3D Wireframe Floor */}
        <div className="absolute bottom-[-40%] left-[-50%] right-[-50%] h-[100%] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(75deg)] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_10%,transparent_100%)]"></div>
      </div>

      {/* Floating Glass Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 mt-6 mx-auto w-[90%] max-w-7xl bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.5)] before:absolute before:inset-0 before:rounded-xl before:bg-white/20 before:mix-blend-overlay">
             <Fingerprint className="h-5 w-5 text-white drop-shadow-md" />
          </div>
          <span className="text-xl font-black text-white tracking-tight">Apex<span className="text-cyan-400">Gen</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-neutral-400">
          <a href="#product" className="hover:text-cyan-400 transition-colors drop-shadow-sm">The 3D Engine</a>
          <a href="#roi" className="hover:text-cyan-400 transition-colors drop-shadow-sm">Client ROI</a>
          <a href="#scale" className="hover:text-cyan-400 transition-colors drop-shadow-sm">Scale Now</a>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-bold text-neutral-400 hover:text-white transition-colors">Client Area</Link>
          <Link href="/login">
            <button className="relative group overflow-hidden rounded-xl bg-white text-black px-6 py-2.5 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all scale-100 hover:scale-105 active:scale-95 duration-300">
              <span className="relative z-10 flex items-center gap-2">Initialize <ArrowRight className="h-4 w-4" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>
            </button>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center pt-24 pb-32 px-6 text-center max-w-6xl mx-auto overflow-hidden">
        
        {/* Holographic Pill */}
        <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-10 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <div className="absolute inset-0 bg-cyan-400/20 blur-xl animate-pulse"></div>
          <Zap className="h-3.5 w-3.5 relative z-10" />
          <span className="relative z-10">AI Lead Engine is Online</span>
        </div>
        
        {/* Massive 3D Text Typography */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-6 leading-[1.0] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          Automate Leads.<br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
             Print Revenue.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed font-medium drop-shadow-md">
          A bespoke, ultra-premium 3D AI architecture that scrapes hot leads, calls prospects, and books meetings autonomously.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto relative z-20">
          <button className="group relative w-full sm:w-auto flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 text-base font-black shadow-[0_10px_40px_rgba(6,182,212,0.5)] hover:shadow-[0_15px_60px_rgba(6,182,212,0.7)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
             <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
             Book Demo Fast <Play className="h-4 w-4 fill-current" />
          </button>
        </div>

        {/* 3D TILTING DASHBOARD MOCKUP */}
        <div className="mt-28 w-full max-w-5xl relative perspective-[2000px] z-10">
           {/* Deep Glow Behind the Mockup */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-600/30 blur-[120px] rounded-full"></div>
           
           {/* The 3D Rendered Glass Card */}
           <div className="relative w-full rounded-2xl border border-white/20 bg-black/40 backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] transform rotate-x-[15deg] rotate-y-[-5deg] hover:rotate-x-[0deg] hover:rotate-y-[0deg] transition-transform duration-1000 ease-out origin-bottom overflow-hidden p-8 group">
              
              {/* Fake Glossy Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10 relative z-10">
                 <div>
                    <h3 className="text-white font-black text-xl tracking-tight flex items-center gap-2">
                       <Activity className="h-5 w-5 text-cyan-400" /> Executive Pulse
                    </h3>
                    <p className="text-neutral-500 text-sm font-semibold mt-1">Real-Time Revenue Engine</p>
                 </div>
                 <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    SYSTEM ONLINE
                 </div>
              </div>

              {/* 3D Hologram Cards Inside Mockup */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                 <div className="bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 rounded-xl p-6 shadow-inner transform hover:-translate-y-2 transition-all duration-300">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                       <Crosshair className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-4xl font-black text-white drop-shadow-md">2,841</div>
                    <div className="text-sm text-cyan-400 font-bold mt-2 tracking-wide uppercase">Leads Scraped</div>
                 </div>
                 
                 <div className="bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 rounded-xl p-6 shadow-inner transform hover:-translate-y-2 transition-all duration-300">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                       <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-4xl font-black text-white drop-shadow-md">64%</div>
                    <div className="text-sm text-indigo-400 font-bold mt-2 tracking-wide uppercase">Close Rate</div>
                 </div>

                 <div className="bg-white/[0.05] border border-white/20 hover:border-emerald-500/50 rounded-xl p-6 shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group/card">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(16,185,129,0.4)] relative z-10">
                       <Zap className="h-5 w-5 text-white shadow-lg" />
                    </div>
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 drop-shadow-md relative z-10">$142k</div>
                    <div className="text-sm text-emerald-400 font-bold mt-2 tracking-wide uppercase relative z-10">Revenue Pipeline</div>
                 </div>
              </div>
           </div>
        </div>
      </main>

      {/* Extreme CTA Footer */}
      <section className="relative z-10 mt-20 pb-32 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-neutral-900 via-black to-neutral-900 border border-white/10 p-12 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,1)]">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
           
           <ShieldCheck className="h-16 w-16 text-cyan-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
           <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Stop thinking. Start scaling.</h2>
           <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">We only deploy this highly-complex 3D AI infrastructure for serious agencies ready to hit 7 figures. Click below to secure your territory.</p>
           
           <button className="relative inline-flex h-16 w-full sm:w-64 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black transition-transform hover:scale-105 active:scale-95">
             <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#06b6d4_100%)]" />
             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black px-8 py-2 text-sm font-bold text-white backdrop-blur-3xl uppercase tracking-widest gap-2">
               Purchase License <ArrowRight className="h-4 w-4" />
             </span>
           </button>
        </div>
      </section>

    </div>
  );
}
