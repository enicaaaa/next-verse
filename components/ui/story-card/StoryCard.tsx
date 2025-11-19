type StoryCardProps = {
  title: string;
  excerpt: string;
  readTime: number;
  tag: string;
};

export const StoryCard = ({ title, excerpt, readTime, tag }: StoryCardProps) => {
  return (
    <article
      className="
        rounded-2xl border border-neutral-800 p-6 
        hover:bg-neutral-900/50 transition 
        hover:border-neutral-700 hover:shadow-md hover:shadow-black/20
        flex flex-col gap-3
      "
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="text-neutral-400 text-sm leading-relaxed">
        {excerpt}
      </p>

      <div className="text-xs text-neutral-500 mt-auto pt-3 flex items-center gap-3">
        <span>{readTime} min read</span>
        <span className="text-neutral-600">•</span>
        <span className="uppercase tracking-wide">{tag}</span>
      </div>
    </article>
  );
};
