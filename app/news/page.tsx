import { Badge } from "@/components/ui/badge/Badge";
import { NewsCard } from "@/components/ui/news-card/NewsCard";
import { MOCK_NEWS } from "@/lib/constants";

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10 flex flex-row gap-5">
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-bold">Next.js News</h1>
          <p className="text-neutral-400 mt-2">
            Latest releases, updates, and changelogs.
          </p>
        </div>
        <div>
          <Badge variant="secondary">Updated weekly</Badge>
        </div>
      </div>

      {/* News List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_NEWS.map((item, index) => (
          <NewsCard key={index} icon={item.icon} title={item.title} description={item.description} date={item.date} tag={item.tag} />
        ))}
      </div>
    </div>
  );
}

