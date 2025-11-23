export interface IStat {
    version: string;
    commits: string;
}

export type NewsItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  date: string;
  tag: "Release" | "Update" | "RFC" | "Breaking" | "Compiler" | "Ecosystem";
  content: string;
};

export type StoryItem = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: number; 
  tag: "Performance" | "RSC" | "Caching" | "Routing" | "Architecture";
  content: string;
  date: string;
  author: string;
};
