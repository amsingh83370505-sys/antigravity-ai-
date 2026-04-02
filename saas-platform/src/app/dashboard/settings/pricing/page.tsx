"use client";

import { useState } from "react";
import { Check, ShieldCheck, Zap } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const plans = [
    {
      name: "Starter",
      id: "price_starter",
      priceMonthly: 49,
      priceAnnual: 39,
      description: "Perfect for freelancers getting started with AI automation.",
      features: ["Up to 500 leads/month", "1 Agent", "Standard Chat Support"],
      isPopular: false,
    },
    {
      name: "Pro",
      id: "price_pro",
      priceMonthly: 99,
      priceAnnual: 79,
      description: "A complete toolkit for growing agencies.",
      features: ["Up to 5,000 leads/month", "5 Custom Agents", "Voice Calls + SMS", "Priority Support"],
      isPopular: true,
    },
    {
      name: "Premium",
      id: "price_premium",
      priceMonthly: 249,
      priceAnnual: 199,
      description: "Unlimited scale for enterprise teams.",
      features: ["Unlimited leads", "Unlimited Agents", "Custom White-labeling", "Dedicated Account Manager"],
      isPopular: false,
    }
  ];

  const handleCheckout = async (priceId: string) => {
    setIsLoading(priceId);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, isSubscription: true }),
      });
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout flow failed.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Upgrade your workflow</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Unlock advanced AI agent capabilities and start scaling automatically.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center p-1 rounded-full bg-neutral-100 border border-neutral-200">
            <button 
              onClick={() => setIsAnnual(false)} 
              className={`relative w-32 rounded-full py-2 text-sm font-medium transition-colors ${!isAnnual ? 'bg-white shadow text-neutral-900 border border-neutral-200' : 'text-neutral-500'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)} 
              className={`relative w-32 rounded-full py-2 text-sm font-medium transition-colors gap-2 flex items-center justify-center ${isAnnual ? 'bg-white shadow text-neutral-900 border border-neutral-200' : 'text-neutral-500'}`}
            >
              Annually <span className="text-[10px] bg-green-100 text-green-700 px-1.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </div>

      <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-5xl md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className={`rounded-3xl p-8 ring-1 transition-all flex flex-col justify-between ${plan.isPopular ? 'ring-2 ring-blue-600 bg-white shadow-xl scale-105 z-10' : 'ring-neutral-200 bg-white/60 shadow-sm'}`}>
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className={`text-lg font-semibold leading-8 ${plan.isPopular ? 'text-blue-600' : 'text-neutral-900'}`}>{plan.name}</h3>
                {plan.isPopular && (
                  <p className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                    Most popular
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-600">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-neutral-900">${isAnnual ? plan.priceAnnual : plan.priceMonthly}</span>
                <span className="text-sm font-semibold leading-6 text-neutral-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <button
              onClick={() => handleCheckout(plan.id)}
              disabled={isLoading === plan.id}
              className={`mt-8 block w-full rounded-md px-3 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline transition ${
                plan.isPopular
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-neutral-900 text-white hover:bg-neutral-800"
              } ${isLoading === plan.id ? "opacity-50" : ""}`}
            >
              {isLoading === plan.id ? "Processing..." : "Subscribe Now"}
            </button>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 mt-12 pb-12">
        <ShieldCheck className="h-5 w-5 text-green-500" />
        Secure payments powered by Stripe. Cancel anytime.
      </div>
    </div>
  );
}
