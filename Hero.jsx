import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { heroBanners } from "@/data/pets";

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % heroBanners.length);
    }, 5000);

    return () => clearInterval(t);
  }, []);

  return (
    <div id="top" className="relative overflow-hidden bg-[#0a0a0b]">
      <div className="w-full px-0 pt-0 pb-0 sm:px-0 md:pb-0">
        <div className="relative overflow-hidden border-y border-white/8 bg-[#111214] shadow-[0_8px_18px_rgba(0,0,0,0.18)] rounded-none">
          
          {heroBanners.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: slide === i ? 1 : 0 }}
            >
              <Image
                src={src}
                alt={`StarPets banner ${i + 1}`}
                fittingType="contain"
                className="h-full w-full bg-[#111214]"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/25 via-transparent to-transparent" />

          <div className="relative aspect-[52/9] sm:aspect-[56/9] md:aspect-[64/10] lg:aspect-[72/11]">
            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-1 sm:px-1.5 md:px-1.5">
              
              <button
                onClick={() =>
                  setSlide(
                    (s) => (s - 1 + heroBanners.length) % heroBanners.length
                  )
                }
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-[#0d0d0f]/70 text-white/80 backdrop-blur-sm transition hover:text-[#D8B652]"
                aria-label="Previous banner"
              >
                <ChevronLeft className="h-3 w-3" />
              </button>

              <button
                onClick={() =>
                  setSlide((s) => (s + 1) % heroBanners.length)
                }
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-[#0d0d0f]/70 text-white/80 backdrop-blur-sm transition hover:text-[#D8B652]"
                aria-label="Next banner"
              >
                <ChevronRight className="h-3 w-3" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
