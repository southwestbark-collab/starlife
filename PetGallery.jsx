import React, { useState, useMemo } from "react";
import PetCard from "./PetCard";
import { pets } from "@/data/pets";

const filters = [
  { key: "all", label: "All" },
  { key: "regular", label: "Regular" },
  { key: "neon", label: "Neon" },
  { key: "mega", label: "Mega" },
  { key: "bundle", label: "Bundles" },
  { key: "skip", label: "Skips" },
];

export default function PetGallery({ searchQuery }) {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    return pets.filter((p) => {
      const matchesFilter = active === "all" || p.rarity === active;
      const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [active, searchQuery]);

  return (
    <section id="menagerie" className="relative z-10 py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-4 md:px-6">
        <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D8B652]">Marketplace</p>
            <h2 className="mt-3 font-display text-2xl tracking-[-0.04em] text-white sm:text-3xl md:text-4xl">
              Search pets
            </h2>
            <p className="mt-2 text-xs text-white/60 sm:text-sm">Tap a pet to see more and find your favorite.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`rounded-full border px-2.5 py-2 text-[9px] font-medium tracking-wide transition-all sm:px-4 sm:py-2.5 sm:text-xs ${
                  active === f.key
                    ? "border-[#D8B652] bg-[#D8B652] text-[#131313] shadow-[0_8px_22px_rgba(216,182,82,0.25)]"
                    : "border-white/10 bg-[#121214] text-white/65 hover:border-[#D8B652]/50 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((pet, i) => (
              <PetCard key={pet.name} pet={pet} index={i} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#121214] py-20 text-center">
            <p className="text-sm text-white/55">No pets match your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}