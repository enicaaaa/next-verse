import Hero from "@/components/features/hero/Hero"
import Newsletter from "@/components/features/newsletter/Newsletter";
import Ticker from "@/components/features/ticker/Ticker"
import { NewsCard } from "@/components/ui/news-card/NewsCard";
import { StoryCard } from "@/components/ui/story-card/StoryCard";
import { MOCK_NEWS, MOCK_STORIES } from "@/lib/constants";
import { fetchLatestNextVersion } from "@/lib/server/github";
import Link from "next/link";

const Home = async () => {
  const version = await fetchLatestNextVersion();

  const FEATURES = [
    {
      title: "Instant API Generation",
      description: "Define your models and let Next-Verse auto-generate fully typed endpoints.",
      icon: "⚡",
    },
    {
      title: "AI-Powered Components",
      description: "Drop-in generative UI helpers that write, optimize, and refactor components.",
      icon: "🤖",
    },
    {
      title: "Zero-Config T3 Stack",
      description: "tRPC, Prisma, Auth & Next.js — all pre-integrated and ready to scale.",
      icon: "📦",
    },
  ];  

  return (
    <section>
      <Hero stat={{ version, commits: '0' }}/>

      {/* CTA - second links */}
      <div className="flex items-center justify-center gap-6 text-sm text-neutral-400">
        <Link href="/news" className="hover:text-[#b19eef] transition-colors">
          See all updates →
        </Link>
        <Link href="/stories" className="hover:text-[#b19eef] transition-colors">
          See expert guides →
        </Link>
      </div>

      <Ticker />

      {/* Features */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold text-center">Build faster with Next-Verse</h2>
        <p className="text-muted-foreground text-center mt-2">
          Modern tooling, smart defaults, and powerful integrations.
        </p>

        <div className="grid gap-8 mt-10 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST NEWS SECTION */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Latest News</h2>
            <p className="text-muted-foreground text-sm">
              Fresh updates from the Next-Verse ecosystem
            </p>
          </div>
          <a 
            href="/news" 
            className="text-sm underline text-muted-foreground hover:text-foreground"
          >
            See all news →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {MOCK_NEWS.slice(0, 3).map((item, index) => (
            <NewsCard key={index} icon={item.icon} title={item.title} description={item.description} date={item.date} tag={item.tag} />
          ))}
        </div>
      </section>


      {/* === FEATURED STORIES SECTION === */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Featured Stories</h2>
            <p className="text-muted-foreground text-sm">
              Deep dives, tutorials, and expert insights
            </p>
          </div>
          <a 
            href="/stories" 
            className="text-sm underline text-muted-foreground hover:text-foreground"
          >
            Read all stories →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {MOCK_STORIES.slice(0, 3).map((item, index) => (
            <StoryCard key={index} title={item.title} excerpt={item.excerpt} readTime={item.readTime} tag={item.tag} />
          ))}
        </div>
      </section>

      <Newsletter />
    </section>
  )
}

export default Home