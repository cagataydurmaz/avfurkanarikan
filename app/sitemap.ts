import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { practiceAreas } from "@/lib/practiceAreas";
import { besiktasServices } from "@/lib/pseo/besiktasServices";
import { sisliServices } from "@/lib/pseo/sisliServices";
import { beyogluServices } from "@/lib/pseo/beyogluServices";
import { kagithaneServices } from "@/lib/pseo/kagithaneServices";

const BASE_URL = "https://furkanarikan.av.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/makaleler`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gizlilik-politikasi`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const practiceAreaPages: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${BASE_URL}/calisma-alanlari/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/makaleler/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const besiktasPseoPages: MetadataRoute.Sitemap = besiktasServices.map((service) => ({
    url: `${BASE_URL}/${service.urlSlug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.slug === "avukat" ? 0.8 : 0.6,
  }));

  const sisliPseoPages: MetadataRoute.Sitemap = sisliServices.map((service) => ({
    url: `${BASE_URL}/${service.urlSlug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.slug === "avukat" ? 0.8 : 0.6,
  }));

  const beyogluPseoPages: MetadataRoute.Sitemap = beyogluServices.map((service) => ({
    url: `${BASE_URL}/${service.urlSlug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.slug === "avukat" ? 0.8 : 0.6,
  }));

  const kagithanePseoPages: MetadataRoute.Sitemap = kagithaneServices.map((service) => ({
    url: `${BASE_URL}/${service.urlSlug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.slug === "avukat" ? 0.8 : 0.6,
  }));

  return [...staticPages, ...practiceAreaPages, ...postPages, ...besiktasPseoPages, ...sisliPseoPages, ...beyogluPseoPages, ...kagithanePseoPages];
}
