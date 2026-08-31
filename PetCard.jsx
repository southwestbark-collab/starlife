import React, { useState } from "react";
import { Clock3, Tag } from "lucide-react";
import { Image } from "@/components/ui/image";
import { rarityConfig } from "@/data/pets";

export default function PetCard({ pet }) {
  const [hovered, setHovered] = useState(false);
  const cfg = rarityConfig[pet.rarity];
  const isFrostPet = pet.name.toLowerCase().includes("frost");
  const showNeonCornerIcon = pet.rarity === "neon" || pet.rarity === "mega";
  const neonBadgeSrc = pet.rarity === "mega" ? "/mega-neon-icon.png" : "/neon-icon.png";
  const neonBadgeStyles = pet.rarity === "mega"
    ? {
        border: "rgba(196, 141, 255, 0.9)",
        background: "rgba(31, 13, 42, 0.85)",
        shadow: "0 0 18px rgba(196, 141, 255, 0.55)",
      }
    : {
        border: "rgba(163, 255, 133, 0.85)",
        background: "rgba(10, 24, 12, 0.8)",
        shadow: "0 0 18px rgba(117,255,104,0.5)",
      };
  const flyBadgeStyles = {
    border: "rgba(96, 165, 250, 0.9)",
    background: "rgba(15, 23, 42, 0.85)",
    shadow: "0 0 16px rgba(96, 165, 250, 0.5)",
  };
  const rideableBadgeStyles = {
    border: "rgba(244, 114, 182, 0.9)",
    background: "rgba(45, 16, 30, 0.85)",
    shadow: "0 0 16px rgba(244, 114, 182, 0.5)",
  };
  const hoverColors = {
    regular: "#7dd3fc",
    neon: "#4ade80",
    mega: "#c084fc",
    bundle: "#a7f3d0",
    skip: "#fbbf24",
  };
  const hoverColor = hoverColors[pet.rarity] ?? "#ffffff";

  const waitDisplay = (() => {
    const value = pet.waitTime ?? "";
    if (!value || value === "No wait" || value === "Skip pass" || value === "Custom") return value;
    return `Estimated: ${value}`;
  })();

  return (
    <a
      href={pet.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative block h-full"
      aria-label={`View ${pet.name}`}
    >
      <div
        className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[1.35rem] transition-all duration-300 group-hover:-translate-y-1 active:scale-[0.99] sm:min-h-[430px]"
        style={{
          background: "rgba(18, 18, 20, 0.92)",
          boxShadow: hovered ? "0 14px 26px rgba(0,0,0,0.22)" : "0 8px 16px rgba(0,0,0,0.14)",
        }}
      >
        <div className="flex h-full flex-col p-2 sm:p-2.5">
          <div className={`relative overflow-hidden rounded-[1.1rem] ${isFrostPet ? "bg-transparent" : "bg-[#101214]"} ${hovered ? "pet-wiggle" : ""}`}>
            <div className="absolute left-2 top-2 z-20 sm:left-2.5 sm:top-2.5">
              <span
                className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.16em] shadow-[0_8px_18px_rgba(0,0,0,0.2)] sm:px-2.5 sm:py-1 sm:text-[10px]"
                style={{ color: cfg.badgeText, background: cfg.badgeBg, borderColor: cfg.border }}
              >
                {cfg.label}
              </span>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={pet.image}
                alt={pet.name}
                fittingType="fill"
                className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] ${isFrostPet ? "bg-transparent" : ""}`}
              />

              {showNeonCornerIcon && (
                <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5">
                  <div
                    className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border backdrop-blur-[1px] sm:h-9 sm:w-9"
                    style={{
                      borderColor: neonBadgeStyles.border,
                      background: neonBadgeStyles.background,
                      boxShadow: neonBadgeStyles.shadow,
                    }}
                  >
                    <img
                      src={neonBadgeSrc}
                      alt={pet.rarity === "mega" ? "Mega neon icon" : "Neon icon"}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div
                    className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border backdrop-blur-[1px] sm:h-8 sm:w-8"
                    style={{
                      borderColor: flyBadgeStyles.border,
                      background: flyBadgeStyles.background,
                      boxShadow: flyBadgeStyles.shadow,
                    }}
                  >
                    <img
                      src="/fly-icon.png"
                      alt="Fly icon"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div
                    className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border backdrop-blur-[1px] sm:h-8 sm:w-8"
                    style={{
                      borderColor: rideableBadgeStyles.border,
                      background: rideableBadgeStyles.background,
                      boxShadow: rideableBadgeStyles.shadow,
                    }}
                  >
                    <img
                      src="/rideable-icon.png"
                      alt="Rideable icon"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-2 flex min-h-[2rem] items-center justify-center">
            <h3
              className="font-display text-[12px] font-semibold leading-tight text-center line-clamp-2 transition-colors duration-300 sm:text-sm"
              style={{ color: hovered ? hoverColor : "#ffffff" }}
            >
              {pet.name}
            </h3>
          </div>
        </div>

        <div className="mt-auto space-y-2 px-2.5 pb-2.5 pt-2 sm:space-y-2.5 sm:px-3.5 sm:pb-3.5">
          <div className="flex items-center justify-between gap-3 text-[10px] text-white/70 sm:text-[12px] sm:text-sm">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Time
            </span>
            <span className="font-semibold text-white/90">{waitDisplay}</span>
          </div>

          <div className="flex items-center justify-between gap-3 text-[10px] text-white/70 sm:text-[12px] sm:text-sm">
            <span className="flex items-center gap-1.5 font-medium">
              <Tag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Robux
            </span>
            <span className="font-bold text-[#D8B652]">{pet.price || "TBD"}</span>
          </div>
        </div>
      </div>
    </a>
  );
}