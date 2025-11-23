import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MOCK_NEWS } from "@/lib/constants";

interface INewsPageProps {
  params: Promise<{ slug: string }>;
}

// export const MOCK_NEWS = [
//   {
//     slug: "nextjs-16-release",
//     title: "Next.js 16 Released — What’s New?",
//     excerpt: "A deep look into the major features shipped in Next.js 16.",
//     content: `
// ### Overview
// Next.js 16 introduces a number of improvements...

// ### Key Features
// - Faster routing  
// - Improved caching  
// - App Router stability  

// ### Final Thoughts
// This is one of the most stable releases so far.
//     `,
//     date: "2025-02-15",
//     author: "Ena Dodić",
//     tags: ["nextjs", "release"],
//   },
//   {
//     slug: "react-compiler-stable",
//     title: "React Compiler Reaches Stable Status",
//     excerpt: "Huge milestone for the React team — compiler is now stable.",
//     content: `
// ### What happened?
// React Compiler is officially marked stable and ready for production...

// ### Why it matters?
// Performance boosts across the board...
//     `,
//     date: "2025-02-10",
//     author: "Ena Dodić",
//     tags: ["react", "compiler"],
//   },
// ] as const;

export default async function NewsPage({ params }: INewsPageProps) {
    const { slug } = await params;
    const article = MOCK_NEWS.find((n) => n.slug === slug);
  
  if (!article) {
    return (
      <div className="text-center text-neutral-400 py-20">
        Not found
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href="/news"
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={18} /> Back to all news
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
        {article.title}
      </h1>

      {/* <div className="text-neutral-500 text-sm mb-8">
        {article.date} • {article.author}
      </div> */}

      <div className="text-neutral-500 text-sm mb-8">
        {article.date}
      </div>

      <div className="flex gap-3 mb-8">
        <span key={article.tag} className="px-3 py-1 rounded-full text-xs bg-neutral-900 border border-neutral-800 text-neutral-400">
            #{article.tag}
        </span>
      </div>

      <article
        className="prose prose-invert prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </section>
  );
}
