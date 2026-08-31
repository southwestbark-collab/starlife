import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { pets, rarityConfig } from "@/data/pets";

export default function BundlesSection() {
  const bundles = pets.filter((p) => p.rarity === "bundle");

  return (
    <section id="bundles" className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D8B652]">Collections</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.04em] text-white">
            Bundles & sales
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bundles.map((b) => {
            const cfg = rarityConfig[b.rarity];
            const isShadowBundle = /shadow/i.test(b.name);

            return (
              <a
                key={b.name}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/8 bg-[#121214] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B652]/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0e]">
                  {isShadowBundle ? (
                    <>
                      <Image src={b.image} alt={b.name} fittingType="fit" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#7cbf4d]">
                      <div className="relative flex h-[85%] w-[85%] items-center justify-center rounded-full border-[5px] border-white/90 bg-[#7cbf4d] shadow-[0_18px_35px_rgba(0,0,0,0.25)]">
                        <div className="absolute left-[28%] top-[30%] h-16 w-16 rotate-[-12deg] rounded-md bg-[#f5f5f5] shadow-[8px_8px_0_rgba(0,0,0,0.12)]" />
                        <div className="absolute left-[33%] top-[31%] h-16 w-16 rotate-[-12deg] rounded-md border border-[#c9c9c9] bg-[#f5f5f5] shadow-[0_0_0_1px_rgba(0,0,0,0.04)]" />
                        <div className="absolute left-[26%] top-[51%] h-14 w-14 rotate-[10deg] rounded-md bg-[#ebebeb] opacity-90" />
                        <div className="absolute left-[34%] top-[58%] h-12 w-12 rotate-[10deg] rounded-md bg-[#d9d9d9] opacity-80" />
                        <div className="absolute left-[34%] top-[58%] h-12 w-12 rotate-[10deg] rounded-md border border-[#bdbdbd] opacity-80" />
                        <div className="absolute left-[34%] top-[36%] h-16 w-16 rotate-[-12deg] rounded-md border-[3px] border-[#8e8e8e]" />
                        <div className="absolute bottom-[-8%] left-[52%] h-10 w-24 rounded-full bg-[#4a6e2e]/25 blur-md" />
                        <div className="relative z-10 text-center leading-[0.8] tracking-[-0.08em] text-white">
                          <div className="text-[18px] font-black italic text-white/95">The</div>
                          <div className="text-[56px] font-black italic text-white/95">Bundle</div>
                        </div>
                      </div>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full border border-[#D8B652]/50 bg-[#0d0d0e]/75 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#D8B652]">
                    {cfg.label}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <h3 className="font-display text-base font-semibold text-white">{b.name}</h3>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors group-hover:bg-[#D8B652] group-hover:text-[#141414]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}