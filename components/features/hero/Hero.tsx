"use client";

import HeroStat from "@/components/ui/hero-statistic/HeroStat";
import { IStat } from "@/lib/types";
import { ScanSearch, SquarePlus } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

interface IHeroProps {
  stat: IStat;
}

const Hero = ({ stat }: IHeroProps) => {
  const slogans = [
    "Fetching latest Next.js updates.", 
    "Compiling insights for developers.", 
    "Discover what’s launching NEXT.",
    "> welcome to NextVerse"];

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[75vh] px-6">
      <h1 className="text-3xl sm:text-5xl font-semibold text-white tracking-[0.05em] mb-3">
        Discover what’s <span className="text-[#b19eef] uppercase">Next</span>.
      </h1>

      <p className="text-neutral-400 text-base max-w-[520px] mb-8 tracking-[0.02em] leading-relaxed">
        Stay updated with everything happening in the Next.js ecosystem — news,
        features, tools, and insights.
      </p>

      <div className="flex gap-3 mb-10 tracking-wide">
        <button className="flex items-center justify-between gap-2 px-5 py-2.5 rounded-xl bg-[#b19eef] text-black text-sm font-medium hover:bg-[#c6b3ff] transition-colors whitespace-nowrap">
          <ScanSearch size={16} />
          Explore News
        </button>
        <button className="flex items-center justify-between gap-2 px-5 py-2.5 rounded-xl border border-neutral-700 text-white text-sm font-medium hover:bg-neutral-800 transition-colors whitespace-nowrap">
          <SquarePlus size={16} />
          Join Community
        </button>
      </div>

      <button className="font-mono text-xs text-left bg-neutral-900 border rounded-lg px-3 py-2.5 text-[#b19eef] shadow-inner cursor-pointer border-[#b19eef] transition-colors tracking-widest">
        <span className="text-neutral-500 pr-2">$</span>
        <span className="animate-pulse">
          <Typewriter 
            words={slogans}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={70}
            delaySpeed={1600}
          />
        </span>
      </button>

      <HeroStat stat={stat} />

      <section className="text-center text-sm text-neutral-400 mb-4 mt-6 flex justify-center gap-1 flex-wrap">
        ⚡ 1,200+ devs staying ahead in Next.js. 
        <span className="text-[#b19eef] text-center">
          Free
        </span>
        to use — no signup required.
      </section>
    </section>
  );
};

export default Hero;
