import { NewsItem, StoryItem } from "./types";

export const URLs = {
    github: {
        latestNextRelease: "https://api.github.com/repos/vercel/next.js/releases/latest",
        weeklyCommits: (since: string) => `https://api.github.com/repos/vercel/next.js/commit_activity`
    }
}

export const MOCK_NEWS: NewsItem[] = [
  {
    icon: "⚡",
    title: "Next.js v16.2.1 Released",
    description: "Patch release improving memory usage and fixing App Router regressions.",
    date: "2 days ago",
    tag: "Release",
  },
  {
    icon: "📦",
    title: "Turbopack Gains 5× Faster Cold Starts",
    description: "Massive cold start improvements now available for large monorepos.",
    date: "5 days ago",
    tag: "Update",
  },
  {
    icon: "🧪",
    title: "React Compiler Moves to Stable",
    description: "The long-awaited compiler enters stable channel with improved RSC integration.",
    date: "1 week ago",
    tag: "Compiler",
  },
  {
    icon: "🔄",
    title: "RFC Approved: Partial Pre-Rendering",
    description: "A new hybrid rendering model arrives to improve dynamic performance.",
    date: "1 week ago",
    tag: "RFC",
  },
  {
    icon: "🛠️",
    title: "Breaking Changes in Next.js Edge Middleware",
    description: "Updated Web Standard APIs introduced in middleware runtime.",
    date: "8 days ago",
    tag: "Breaking",
  },
  {
    icon: "🚀",
    title: "Next.js Adopts React 19 by Default",
    description: "React 19 features enabled with zero-config migration support.",
    date: "10 days ago",
    tag: "Update",
  },
  {
    icon: "📚",
    title: "New Documentation on Server Actions",
    description: "Updated best practices for caching, mutations, and error handling.",
    date: "12 days ago",
    tag: "Ecosystem",
  },
  {
    icon: "🧭",
    title: "App Router Navigation Improvements",
    description: "Smaller JS bundles, faster transitions, and better prefetching behavior.",
    date: "2 weeks ago",
    tag: "Update",
  },
  {
    icon: "📊",
    title: "Telemetry Shows Adoption Spike",
    description: "Over 40% of new Next.js apps now using RSC-first architecture.",
    date: "3 weeks ago",
    tag: "Ecosystem",
  },
  {
    icon: "🔧",
    title: "Enhanced Config Validation",
    description: "Stricter schema validation helps catch misconfigurations early.",
    date: "3 weeks ago",
    tag: "Update",
  },
];

export const MOCK_STORIES: StoryItem[] = [
  {
    title: "Understanding Partial Pre-Rendering (PPR)",
    excerpt: "A deep dive into how PPR changes the rendering landscape for hybrid pages.",
    readTime: 12,
    tag: "Performance",
  },
  {
    title: "Migrating Safely from CSR to RSC",
    excerpt: "A step-by-step guide to adopting React Server Components in large codebases.",
    readTime: 14,
    tag: "RSC",
  },
  {
    title: "Mastering Server Actions with Zero Boilerplate",
    excerpt: "Learn how to simplify mutations and caching logic across your app.",
    readTime: 9,
    tag: "Architecture",
  },
  {
    title: "Optimizing App Router Caching Layers",
    excerpt: "In-depth breakdown of Next.js caching primitives and where to apply them.",
    readTime: 11,
    tag: "Caching",
  },
  {
    title: "Advanced Routing Strategies in App Router",
    excerpt: "Patterns for structuring complex navigation flows at scale.",
    readTime: 10,
    tag: "Routing",
  },
  {
    title: "Building Blazing-Fast Edge Experiences",
    excerpt: "How to use Edge runtime to reduce TTFB and compute latency globally.",
    readTime: 8,
    tag: "Performance",
  },
  {
    title: "From Monolith to Modular: Scaling Large Next.js Apps",
    excerpt: "Real-world strategies for splitting massive apps into micro-frontends.",
    readTime: 15,
    tag: "Architecture",
  },
  {
    title: "How React Compiler Works Under the Hood",
    excerpt: "Understand the optimization pipeline and what it means for your components.",
    readTime: 13,
    tag: "RSC",
  },
];
