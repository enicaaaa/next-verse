export interface IStat {
    version: string;
    commits: string;
}

export type NewsItem = {
  icon: string;
  title: string;
  description: string;
  date: string;
  tag: "Release" | "Update" | "RFC" | "Breaking" | "Compiler" | "Ecosystem";
};

export type StoryItem = {
  title: string;
  excerpt: string;
  readTime: number; 
  tag: "Performance" | "RSC" | "Caching" | "Routing" | "Architecture";
};
