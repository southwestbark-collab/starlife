import React, { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Navbar({ onSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const isTutorialPage = typeof window !== "undefined" && window.location.pathname === "/tutorials";
  const homeHref = isTutorialPage ? "/" : "/#top";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (isTutorialPage) {
      window.location.href = "/#menagerie";
      return;
    }
    onSearch?.(query);
    document.getElementById("menagerie")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0b0b0d]/90 backdrop-blur-lg border-b border-white/8" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href={homeHref} className="flex items-center gap-2.5">
          <span className="font-display font-bold text-lg md:text-xl tracking-[0.12em] text-white uppercase">
            Star<span className="text-[#D8B652]">Pets</span>
          </span>
        </a>

        <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a8a]" />
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); onSearch?.(e.target.value); }}
              placeholder="Search pets…"
              className="w-full rounded-xl border border-white/10 bg-[#121214] pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-[#8a8a8a] focus:outline-none focus:border-[#D8B652]/60 transition-colors"
            />
          </div>
        </form>

        <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 flex items-center justify-center text-white" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/8 bg-[#0d0d0e] px-5 py-5 space-y-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a8a]" />
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); onSearch?.(e.target.value); }}
              placeholder="Search pets…"
              className="w-full rounded-xl border border-white/10 bg-[#121214] pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-[#8a8a8a] focus:outline-none"
            />
          </form>
        </div>
      )}
    </header>
  );
}