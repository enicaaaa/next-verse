import { Calendar } from "lucide-react";
import { ReactNode } from "react";

type NewsCardProps = {
  icon: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  children?: ReactNode;
};

export const NewsCard = ({ icon, title, description, date, tag }: NewsCardProps) => {
  return (
    <article className="
      rounded-2xl border border-neutral-800 p-5 
      hover:bg-neutral-900/60 transition-colors 
      hover:border-neutral-700 hover:shadow-lg hover:shadow-black/20
      flex flex-col gap-3
    ">
      <div className="flex items-center gap-2">
        <span className="text-[#b19eef] text-xl">{icon}</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 uppercase tracking-wide">
          {tag}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="text-neutral-400 text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex items-center gap-2 text-neutral-500 text-xs mt-auto pt-2">
        <Calendar size={14} />
        {date}
      </div>
    </article>
  );
};
