import { NewsItem, StoryItem } from "./types";

export const URLs = {
    github: {
        latestNextRelease: "https://api.github.com/repos/vercel/next.js/releases/latest",
        weeklyCommits: (since: string) => `https://api.github.com/repos/vercel/next.js/commit_activity`
    }
}

export const MOCK_NEWS: NewsItem[] = [
  {
    slug: "nextjs-v16-2-1-released",
    icon: "⚡",
    title: "Next.js v16.2.1 Released",
    description: "Patch release improving memory usage and fixing App Router regressions.",
    date: "2 days ago",
    tag: "Release",
    content: `
### Next.js v16.2.1 Patch Release
This update focuses on stabilizing the App Router and optimizing memory usage for large deployments.

### Fixes & Improvements
- Reduced memory consumption for dev server
- Fixed regressions in RSC navigation
- Improved reliability for Edge runtime

### Summary
A small but important release for production workloads.
`
  },
  {
    slug: "turbopack-5x-faster-cold-starts",
    icon: "📦",
    title: "Turbopack Gains 5× Faster Cold Starts",
    description: "Massive cold start improvements now available for large monorepos.",
    date: "5 days ago",
    tag: "Update",
    content: `
### Faster Turbo Starts
Turbopack introduces major cold start improvements, especially in monorepo environments.

### Key Improvements
- Up to 5× faster initial load
- Better incremental parsing
- More efficient caching layers
`
  },
  {
    slug: "react-compiler-stable",
    icon: "🧪",
    title: "React Compiler Moves to Stable",
    description: "The long-awaited compiler enters stable channel with improved RSC integration.",
    date: "1 week ago",
    tag: "Compiler",
    content: `
### React Compiler Reaches Stability
The compiler now fully supports RSC and features optimized transforms.

### Why It Matters
Better performance, fewer cascaded re-renders, and more predictable component outputs.
`
  },
  {
    slug: "rfc-approved-partial-pre-rendering",
    icon: "🔄",
    title: "RFC Approved: Partial Pre-Rendering",
    description: "A new hybrid rendering model arrives to improve dynamic performance.",
    date: "1 week ago",
    tag: "RFC",
    content: `
### Partial Pre-Rendering
A groundbreaking model mixing static and dynamic rendering seamlessly.

### Highlights
- Faster TTFB
- Improved caching logic
- Smooth hydration for dynamic sections
`
  },
  {
    slug: "nextjs-edge-middleware-breaking-changes",
    icon: "🛠️",
    title: "Breaking Changes in Next.js Edge Middleware",
    description: "Updated Web Standard APIs introduced in middleware runtime.",
    date: "8 days ago",
    tag: "Breaking",
    content: `
### Edge Middleware Updates
With the adoption of new Web Standard APIs, some breaking changes are introduced.

### What Changed
- Updated Request/Response APIs
- Stricter runtime validation
- Deprecation of legacy patterns
`
  },
  {
    slug: "nextjs-adopts-react-19",
    icon: "🚀",
    title: "Next.js Adopts React 19 by Default",
    description: "React 19 features enabled with zero-config migration support.",
    date: "10 days ago",
    tag: "Update",
    content: `
### React 19 Now Default
Next.js officially moves to React 19 with backward compatibility ensured.

### Included Features
- Actions API
- Enhanced transitions
- Improved Suspense behavior
`
  },
  {
    slug: "new-docs-server-actions",
    icon: "📚",
    title: "New Documentation on Server Actions",
    description: "Updated best practices for caching, mutations, and error handling.",
    date: "12 days ago",
    tag: "Ecosystem",
    content: `
### Updated Documentation
The Server Actions guide now covers caching strategies, mutation flows, and error recovery.

### Key Sections Added
- Revalidation approaches
- Mutations at scale
- Error boundaries
`
  },
  {
    slug: "app-router-navigation-improvements",
    icon: "🧭",
    title: "App Router Navigation Improvements",
    description: "Smaller JS bundles, faster transitions, and better prefetching behavior.",
    date: "2 weeks ago",
    tag: "Update",
    content: `
### App Router Improvements
Navigation is now more responsive due to bundle size reductions and smarter prefetching.

### Highlights
- Smaller client bundles
- Faster transitions
- Improved link prefetch heuristics
`
  },
  {
    slug: "nextjs-telemetry-adoption-spike",
    icon: "📊",
    title: "Telemetry Shows Adoption Spike",
    description: "Over 40% of new Next.js apps now using RSC-first architecture.",
    date: "3 weeks ago",
    tag: "Ecosystem",
    content: `
### Adoption Spike
Telemetry reports show RSC-first adoption is at an all-time high.

### Insights
- 40%+ new projects use RSC-first
- PPR gaining traction
- Edge runtime adoption rising
`
  },
  {
    slug: "enhanced-config-validation",
    icon: "🔧",
    title: "Enhanced Config Validation",
    description: "Stricter schema validation helps catch misconfigurations early.",
    date: "3 weeks ago",
    tag: "Update",
    content: `
### Config Validation Boost
Next.js introduces enhanced configuration schema checks.

### Benefits
- Early detection of invalid settings
- Safer deployments
- Fewer build-time failures
`
  },
];

export const MOCK_STORIES: StoryItem[] = [
  {
    slug: "understanding-partial-pre-rendering-ppr",
    title: "Understanding Partial Pre-Rendering (PPR)",
    excerpt: "A deep dive into how PPR changes the rendering landscape for hybrid pages.",
    readTime: 12,
    tag: "Performance",
    date: "2025-02-14",
    author: "Ena Dodić",
    content: `
### What is PPR?
Partial Pre-Rendering is a new hybrid model introduced in Next.js...

### Why It's Important
It enables dynamic content without sacrificing static performance...

### Conclusion
PPR bridges the gap between static and dynamic rendering.
`
  },
  {
    slug: "migrating-from-csr-to-rsc",
    title: "Migrating Safely from CSR to RSC",
    excerpt: "A step-by-step guide to adopting React Server Components in large codebases.",
    readTime: 14,
    tag: "RSC",
    date: "2025-02-10",
    author: "Ena Dodić",
    content: `
### Why RSC?
React Server Components unlock new performance opportunities...

### Migration Strategies
- Start with leaf components
- Introduce Server Actions gradually
- Avoid unnecessary client boundaries

### Final Thoughts
Migrating to RSC is easier with a disciplined approach.
`
  },
  {
    slug: "mastering-server-actions",
    title: "Mastering Server Actions with Zero Boilerplate",
    excerpt: "Learn how to simplify mutations and caching logic across your app.",
    readTime: 9,
    tag: "Architecture",
    date: "2025-02-08",
    author: "Ena Dodić",
    content: `
### Server Actions Simplified
Actions reduce API boilerplate and integrate seamlessly with caching.

### Best Practices
- Keep inputs serializable
- Handle errors gracefully
- Combine with PPR for best performance
`
  },
  {
    slug: "optimizing-app-router-caching",
    title: "Optimizing App Router Caching Layers",
    excerpt: "In-depth breakdown of Next.js caching primitives and where to apply them.",
    readTime: 11,
    tag: "Caching",
    date: "2025-02-06",
    author: "Ena Dodić",
    content: `
### Caching Layers
Next.js applies caching at multiple levels: fetch, route, and component.

### When to Use What
Different strategies apply based on data stability and interaction patterns.
`
  },
  {
    slug: "advanced-routing-strategies",
    title: "Advanced Routing Strategies in App Router",
    excerpt: "Patterns for structuring complex navigation flows at scale.",
    readTime: 10,
    tag: "Routing",
    date: "2025-02-04",
    author: "Ena Dodić",
    content: `
### Routing at Scale
Large apps require consistent and predictable route structure.

### Patterns
- Route groups
- Parallel routes
- Intercepting routes
`
  },
  {
    slug: "building-blazing-fast-edge-experiences",
    title: "Building Blazing-Fast Edge Experiences",
    excerpt: "How to use Edge runtime to reduce TTFB and compute latency globally.",
    readTime: 8,
    tag: "Performance",
    date: "2025-02-02",
    author: "Ena Dodić",
    content: `
### Why Edge?
Running logic closer to users reduces TTFB dramatically.

### Best Use Cases
- Authentication
- Gatekeeping logic
- Dynamic personalization
`
  },
  {
    slug: "from-monolith-to-modular-nextjs",
    title: "From Monolith to Modular: Scaling Large Next.js Apps",
    excerpt: "Real-world strategies for splitting massive apps into micro-frontends.",
    readTime: 15,
    tag: "Architecture",
    date: "2025-02-01",
    author: "Ena Dodić",
    content: `
### Scalability Issues
Monolithic structures become difficult to maintain at scale.

### Modularization Strategies
- Independent route groups
- Shared utilities via packages
- Deployment isolation
`
  },
  {
    slug: "how-react-compiler-works",
    title: "How React Compiler Works Under the Hood",
    excerpt: "Understand the optimization pipeline and what it means for your components.",
    readTime: 13,
    tag: "RSC",
    date: "2025-01-28",
    author: "Ena Dodić",
    content: `
### How It Works
The compiler transforms your components for optimized execution.

### Benefits
- Fewer re-renders
- Better memoization
- Predictable output
`
  },
];

