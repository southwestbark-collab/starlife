import React from "react";

export default function AuthLayout({ icon: Icon, title, subtitle, footer, children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0b] px-4 py-12 text-white">
      <div className="mx-auto flex max-w-md items-center justify-center">
        <div className="w-full">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D8B652]/30 bg-[#D8B652]/10 text-[#D8B652] shadow-[0_12px_30px_rgba(216,182,82,0.15)]">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </div>
            <h1 className="font-display text-3xl font-bold tracking-[-0.05em] text-white">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-white/60">{subtitle}</p>}
          </div>

          <div className="rounded-[1.5rem] border border-white/8 bg-[#121214] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:p-8">
            {children}
          </div>

          {footer && (
            <p className="mt-6 text-center text-sm text-white/60">{footer}</p>
          )}
        </div>
      </div>
    </div>
  );
}
