import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-800 mt-24 px-8 py-8 text-center text-sm text-neutral-400">
      <div className="flex flex-col items-center gap-2 leading-snug">

        {/* Links */}
        <div className="flex gap-6 text-[15px]">
          <Link
            href="https://github.com/enicaaaa/next-verse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b19eef] transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="mailto:enicaaaa99@gmail.com"
            className="hover:text-[#b19eef] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-3 text-neutral-500">
          © {new Date().getFullYear()} NextVerse — All rights reserved | Curated by{" "}
          <span className="text-[#b19eef] font-medium hover:opacity-90 transition-opacity cursor-pointer underline">
            Ena Dodic
          </span>
        </p>

        {/* Disclaimer */}
        <p className="text-neutral-600 text-xs max-w-[580px] mt-1">
          Next.js is a trademark of Vercel Inc. in the US. This platform is not
          affiliated with or endorsed by Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
