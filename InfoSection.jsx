import React from "react";
import { Clock, HelpCircle, FileText } from "lucide-react";
import { siteInfo } from "@/data/pets";

export default function InfoSection() {
  return (
    <section id="info" className="relative z-10 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Wait times
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl p-7 bg-[#141414] border border-white/8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Time</h3>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-white/65 leading-relaxed">{siteInfo.waitTimes}</p>
          </div>

        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#141414] shadow-[0_20px_40px_rgba(0,0,0,0.24)]">
          <div className="border-b border-white/8 px-5 py-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D8B652]">How it works</p>
          </div>
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/6CfH1R2lObU?rel=0"
              title="StarPets overview video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50">
          <HelpCircle className="w-4 h-4" />
          <span>Need help? Ask us.</span>
        </div>
      </div>
    </section>
  );
}