"use client";

import { Sparkles } from "lucide-react";

const TICKER_UPDATES = [
  { icon: "⚡", text: "Turbopack: 5× faster builds" },
  { icon: "📦", text: "Next.js v16 released" },
  { icon: "🧪", text: "React Compiler stable" },
  { icon: "🔄", text: "Partial Pre-Rendering (PPR)" },
  { icon: "🛠️", text: "Improved caching APIs" },
];

const Ticker = () => {
  return (
    <div className="relative overflow-hidden py-2">
      <div className="absolute top-0 left-0 h-full w-16 pointer-events-none bg-linear-to-r from-neutral-800 to-transparent" />
      <div className="absolute top-0 right-0 h-full w-16 pointer-events-none bg-linear-to-l from-neutral-800 to-transparent" />

      <div
        className="flex gap-12 whitespace-nowrap animate-marquee hover:pause-animation"
      >
        {[...TICKER_UPDATES, ...TICKER_UPDATES].map((update, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-neutral-300 text-sm font-mono uppercase"
          >
            <span className="text-[#b19eef] text-lg">{update.icon}</span>
            {update.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
