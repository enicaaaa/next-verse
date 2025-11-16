import { URLs } from "@/lib/constants";

export const fetchLatestNextVersion = async () => {
  const res = await fetch(URLs.github.latestNextRelease, {
    headers: {
      "User-Agent": "NextVerse",
    },
    next: { revalidate: 3600 } // 1h refresh
  });

  if (!res.ok) return null;

  const json = await res.json();
  return json.tag_name || null;
}
