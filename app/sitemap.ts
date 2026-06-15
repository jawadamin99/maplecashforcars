import type { MetadataRoute } from "next";

const baseUrl = "https://maplecashforcars.ca";

const routes = [
  "",
  "/contact",
  "/cash-for-cars-airdrie",
  "/cash-for-cars-banff",
  "/cash-for-cars-black-diamond",
  "/cash-for-cars-bragg-creek",
  "/cash-for-cars-brooks",
  "/cash-for-cars-canmore",
  "/cash-for-cars-chestermere",
  "/cash-for-cars-cochrane",
  "/cash-for-cars-diamond-valley",
  "/cash-for-cars-lethbridge",
  "/cash-for-cars-okotoks",
  "/cash-for-cars-red-deer",
  "/cash-for-cars-strathmore",
  "/privacy-policy",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/cash-for-cars") ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/cash-for-cars") ? 0.8 : 0.5,
  }));
}
