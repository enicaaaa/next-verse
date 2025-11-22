"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full max-w-xl mx-auto mt-24 mb-16 px-6 text-center">
      <h3 className="text-xl font-semibold text-white">
        Stay in the loop.
      </h3>

      <p className="text-neutral-400 text-sm mt-2 mb-6">
        Get weekly Next.js insights, updates, and tips. 
        <span className="text-[#b19eef] font-medium"> Free forever.</span>
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-[#b19eef] transition-colors"
        />

        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-[#b19eef] text-black font-medium text-sm hover:bg-[#c8b4ff] transition-colors"
        >
          Subscribe
        </button>
      </form>

      <p className="text-neutral-600 text-xs mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </section>
  );
};

export default Newsletter;