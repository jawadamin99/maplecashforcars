import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content", "blog");
const postExtensions = [".mdx", ".md"];

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  date: string;
  description: string;
  metaDescription: string;
  cover: string;
  content: string;
};

type FrontMatter = Partial<Omit<BlogPost, "slug" | "content">>;

function parseFrontMatter(raw: string): { data: FrontMatter; content: string } {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, content: raw };
  }

  const frontMatter = raw.slice(3, end).trim();
  const content = raw.slice(end + 4).trimStart();
  const data: FrontMatter = {};

  for (const line of frontMatter.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim() as keyof FrontMatter;
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  }

  return { data, content };
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((name) => postExtensions.some((ext) => name.toLowerCase().endsWith(ext)))
    .map((name) => name.replace(/\.(md|mdx)$/i, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.(md|mdx)$/i, "");
  const fullPath =
    postExtensions
      .map((ext) => path.join(postsDirectory, `${realSlug}${ext}`))
      .find((candidate) => fs.existsSync(candidate)) || null;

  if (!fullPath) return null;

  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontMatter(file);

  return {
    slug: realSlug,
    title: data.title || realSlug,
    metaTitle: data.metaTitle || data.title || realSlug,
    date: data.date || "",
    description: data.description || "",
    metaDescription: data.metaDescription || data.description || "",
    cover: data.cover || "",
    content,
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map(getPostBySlug)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      const aTime = a.date ? Date.parse(a.date) : 0;
      const bTime = b.date ? Date.parse(b.date) : 0;
      return bTime - aTime;
    });
}

export function formatPostDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
