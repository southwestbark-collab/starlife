import React from "react";
import Navbar from "./Navbar";

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <Navbar onSearch={() => { window.location.href = "/#menagerie"; }} />
      <div className="mx-auto max-w-6xl px-5 py-28 md:px-8">
        <div className="mb-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D8B652]">Tutorials</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">
            Learn how to buy and use pets
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/65 md:text-lg">
            Follow the walkthrough to understand how the marketplace works and how to get started with your next pet.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#121214] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/6CfH1R2lObU"
              title="StarPets tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/8 bg-[#121214] p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[#D8B652]">1</p>
            <h2 className="mt-3 text-xl font-semibold text-white">Browse pets</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Explore the catalog and filter by rarity, bundles, or type to find the right companion.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/8 bg-[#121214] p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[#D8B652]">2</p>
            <h2 className="mt-3 text-xl font-semibold text-white">Review details</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Check the pet information, rarity, and purchase link before committing to the item.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/8 bg-[#121214] p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[#D8B652]">3</p>
            <h2 className="mt-3 text-xl font-semibold text-white">Buy securely</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Use the official purchase link and follow the marketplace flow to complete your order safely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
