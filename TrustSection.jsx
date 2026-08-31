import React from "react";
import { ShieldCheck, Zap, RefreshCw, Headphones } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Safe checkouts", desc: "We use verified Roblox gamepasses so buying is simple and clear." },
  { icon: Zap, title: "Fast delivery", desc: "Most pets go out right after your order is made." },
  { icon: RefreshCw, title: "Always ready", desc: "Regular, Neon, and Mega pets are easy to find." },
  { icon: Headphones, title: "Help team", desc: "Real people are here if you need a hand." },
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D8B652]">Why us</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.04em] text-white">Simple and easy</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/8 bg-[#121214] p-6 transition-colors hover:border-[#D8B652]/35">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#D8B652]/10 text-[#D8B652]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-lg text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}