import Link from "next/link";
import { Bot, Zap, ShieldCheck, ArrowRight, Activity, BarChart, PhoneCall } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-[150%] h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto border-b border-white/5 bg-neutral-950/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent tracking-tight">Antigravity.AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">Live Agents</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">SignIn</Link>
          <Link href="/login">
            <button className="rounded-full bg-white text-neutral-950 px-5 py-2 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all scale-100 hover:scale-105 active:scale-95">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-32 pb-40 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8 animate-fade-in-up">
          <SparklesIcon className="h-3.5 w-3.5" />
          Antigravity Engine v2.0 is Live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1]">
          Deploy autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">revenue agents</span> in minutes.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
          The premium infrastructure for B2B agencies. Automate your phone systems, scale your cold outreach, and build funnels that literally close themselves.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href="/login" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white px-8 py-4 text-base font-semibold shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all">
              Launch Dashboard <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors">
            Book Demo
          </button>
        </div>

        {/* Dashboard Preview Glass Mockup */}
        <div className="mt-24 w-full max-w-6xl relative rounded-2xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          {/* Mock Window Bar */}
          <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
             <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
             <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
             <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
          </div>
          {/* Mock App Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
             <div className="h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-neutral-400">
               <Activity className="h-6 w-6 text-blue-400" /> +42% Conversion
             </div>
             <div className="h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-neutral-400">
               <PhoneCall className="h-6 w-6 text-purple-400" /> 845 Calls Made
             </div>
             <div className="h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-neutral-400">
               <BarChart className="h-6 w-6 text-emerald-400" /> $184k Pipeline
             </div>
          </div>
        </div>
      </main>

      {/* Feature Grid */}
      <section id="features" className="relative z-10 bg-black/50 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for scale.</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Stop paying for basic chat wrappers. This is an enterprise-grade engine designed to convert traffic into revenue.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
               <div className="h-12 w-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                 <Zap className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Lightning Latency</h3>
               <p className="text-neutral-400 leading-relaxed">Our voice agents respond in under 400ms, making conversations feel completely human.</p>
             </div>
             <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
               <div className="h-12 w-12 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                 <Bot className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Modular Intelligence</h3>
               <p className="text-neutral-400 leading-relaxed">Switch your agent's persona from a gentle Lead Scraper to an aggressive Sales Closer with one click.</p>
             </div>
             <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
               <div className="h-12 w-12 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                 <ShieldCheck className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Stripe Ready</h3>
               <p className="text-neutral-400 leading-relaxed">Instantly sync your client billing via native Webhooks. No third-party zaps required.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
