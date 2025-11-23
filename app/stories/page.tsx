import { StoryCard } from "@/components/ui/story-card/StoryCard";
import { MOCK_STORIES } from "@/lib/constants";
import Link from "next/link";

export default function StoriesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Stories & Insights</h1>
        <p className="text-neutral-400 mt-2">
          Deep dives, tutorials, and engineering insights.
        </p>
      </header>

      {/* Stories List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_STORIES.map((item, index) => (
          <Link href={`/stories/${item.slug}`} key={index}>
            <StoryCard title={item.title} excerpt={item.excerpt} readTime={item.readTime} tag={item.tag} />
          </Link>
        ))}
      </div>
    </div>
  );
}
