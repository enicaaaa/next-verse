import { IStat } from "@/lib/types";
import { Box, FlaskConical, GitBranch } from "lucide-react";

interface IHeroStatProps {
  stat: IStat;
}

export const HeroStat = ({ stat }: IHeroStatProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
      {/* Latest version */}
      <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800 rounded-md px-4 py-2 shadow-[0_1px_0_#ffffff0f_inset]">
        <Box size={16} className="text-[#b19eef]" />
        <span className="text-neutral-300 text-sm">
          Next.js <span className="font-mono text-white">{stat.version}</span>
        </span>
      </div>

      {/* Commits this week */}
      <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800 rounded-md px-4 py-2 shadow-[0_1px_0_#ffffff0f_inset]">
        <GitBranch size={16} className="text-[#b19eef]" />
        <span className="text-neutral-300 text-sm">
          <span className="font-mono text-white">{stat.commits}</span> commits this week
        </span>
      </div>

      {/* React Compiler status */}
      <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800 rounded-md px-4 py-2 shadow-[0_1px_0_#ffffff0f_inset]">
        <FlaskConical size={16} className="text-[#b19eef]" />
        <span className="text-neutral-300 text-sm">
          React Compiler:{" "}
          <span className="font-mono text-white">&nbsp;Stable (Opt-in)</span>
        </span>
      </div>
    </div>
  );
};

export default HeroStat;
