import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-[#0b0b0d]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="mb-4 inline-block">
              <span className="font-display text-lg font-bold tracking-[0.12em] text-white uppercase">
                Star<span className="text-[#D8B652]">Pets</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              A simple place to find pets, bundle deals, and cool drops.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#menagerie" className="text-white/70 hover:text-[#D8B652]">Shop</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Tiers</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="https://www.roblox.com/game-pass/1181588564/Every-regular-pet-on-the-site" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#D8B652]">Regular pets</a></li>
                <li><a href="https://www.roblox.com/game-pass/1181840621/Every-Neon-Pet-on-the-site" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#D8B652]">Neon pets</a></li>
                <li><a href="https://www.roblox.com/game-pass/1181822632/Every-Mega-Pet-on-the-site" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#D8B652]">Mega pets</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} StarPets</p>
          <p>Not affiliated with Roblox Corporation or Adopt Me.</p>
        </div>
      </div>
    </footer>
  );
}