import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MOCK_STORIES } from "@/lib/constants";

interface IStoryPageProps {
  params: Promise<{ slug: string }>;
}

// export const MOCK_STORIES = [
//   {
//     slug: "optimize-nextjs-app",
//     title: "How to Make Your Next.js App Ultra Fast",
//     excerpt: "Practical techniques to drastically improve performance.",
//     content: `
// ### Intro
// Whether you're building SaaS or content-heavy apps...

// ### Steps
// 1. Use PPR  
// 2. Cache on the server  
// 3. Edge rendering where useful  

// ### Summary
// Performance is strategy — not a last-minute fix.
//     `,
//     date: "2025-02-18",
//     author: "Ena Dodić",
//     tags: ["performance", "tutorial"],
//   },
//   {
//     slug: "build-news-platform",
//     title: "Building a Modern News Platform in Next.js",
//     excerpt:
//       "A full breakdown of architecture, caching, UI, and editorial workflow.",
//     content: `
// ### Architecture
// The modern stack relies on App Router...

// ### Why Next.js?
// Because it gives full control over rendering strategy...

// ### Final Notes
// Consistency beats complexity.
//     `,
//     date: "2025-02-12",
//     author: "Ena Dodić",
//     tags: ["architecture", "guide"],
//   },
// ] as const;

export default async function StoryPage({ params }: IStoryPageProps) {
    const { slug } = await params;
  const story = MOCK_STORIES.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="text-center text-neutral-400 py-20">
        Not found
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href="/stories"
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={18} /> Back to all stories
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
        {story.title}
      </h1>

      <div className="text-neutral-500 text-sm mb-8">
        {story.date} • {story.author}
      </div>

      <div className="flex gap-3 mb-8">
          <span
            key={story.tag}
            className="px-3 py-1 rounded-full text-xs bg-neutral-900 border border-neutral-800 text-neutral-400"
          >
            #{story.tag}
          </span>
      </div>

      <article
        className="prose prose-invert prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: story.content }}
      />
    </section>
  );
}
