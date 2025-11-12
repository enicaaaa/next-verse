"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [code, setCode] = useState("");
  const codeText = "> welcome to NextVerse";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCode(codeText.slice(0, i));
      i++;
      if (i > codeText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      {/* Slogan */}
      <h1 className="text-4xl sm:text-6xl font-semibold text-white tracking-[0.06em] mb-4">
        Discover what’s <span className="text-[#b19eef] uppercase">Next</span>.
      </h1>

      {/* Podnaslov */}
      <p className="text-neutral-400 text-lg max-w-[600px] mb-10 tracking-[0.03em] leading-relaxed">
        Stay updated with everything happening in the Next.js ecosystem — news,
        features, tools, and insights.
      </p>

      {/* Dugmici */}
      <div className="flex gap-4 mb-12 tracking-wide">
        <button className="px-6 py-3 rounded-xl bg-[#b19eef] text-black font-medium hover:bg-[#c6b3ff] transition-colors">
          Explore News
        </button>
        <button className="px-6 py-3 rounded-xl border border-neutral-700 text-white font-medium hover:bg-neutral-800 transition-colors">
          Join Community
        </button>
      </div>

      {/* Code-style dugme */}
      <button className="font-mono text-sm text-left bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-[#b19eef] shadow-inner cursor-pointer hover:border-[#b19eef] transition-colors tracking-widest">
        <span className="text-neutral-500 pr-2">$</span>
        <span className="animate-pulse">{code}</span>
      </button>
    </section>
  );
};

export default Hero;
