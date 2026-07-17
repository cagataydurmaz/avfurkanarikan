import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { practiceAreas } from "@/lib/practiceAreas";
import { besiktasServices } from "@/lib/pseo/besiktasServices";
import { sisliServices } from "@/lib/pseo/sisliServices";
import { beyogluServices } from "@/lib/pseo/beyogluServices";
import { kagithaneServices } from "@/lib/pseo/kagithaneServices";
import { fatihServices } from "@/lib/pseo/fatihServices";
import { sariyerServices } from "@/lib/pseo/sariyerServices";
import { eyupsultanServices } from "@/lib/pseo/eyupsultanServices";
import { bayrampasaServices } from "@/lib/pseo/bayrampasaServices";
import { arnavutkoyServices } from "@/lib/pseo/arnavutkoyServices";
import { bagcilarServices } from "@/lib/pseo/bagcilarServices";
import { bahcelievlerServices } from "@/lib/pseo/bahcelievlerServices";
import { esenlerServices } from "@/lib/pseo/esenlerServices";
import { zeytinburnuServices } from "@/lib/pseo/zeytinburnuServices";
import { gungorenServices } from "@/lib/pseo/gungorenServices";
import { bakirkoyServices } from "@/lib/pseo/bakirkoyServices";
import { esenyurtServices } from "@/lib/pseo/esenyurtServices";
import { beylikduzuServices } from "@/lib/pseo/beylikduzuServices";
import { buyukcekmeceServices } from "@/lib/pseo/buyukcekmeceServices";
import { silivriServices } from "@/lib/pseo/silivriServices";
import { catalcaServices } from "@/lib/pseo/catalcaServices";
import { kucukcekmeceServices } from "@/lib/pseo/kucukcekmeceServices";
import { basaksehirServices } from "@/lib/pseo/basaksehirServices";
import { avcilarServices } from "@/lib/pseo/avcilarServices";
import type { PseoService } from "@/lib/pseo/types";

const BASE_URL = "https://furkanarikan.av.tr";

const allPseoServices: PseoService[] = [
  ...besiktasServices,
  ...sisliServices,
  ...beyogluServices,
  ...kagithaneServices,
  ...fatihServices,
  ...sariyerServices,
  ...eyupsultanServices,
  ...bayrampasaServices,
  ...arnavutkoyServices,
  ...bagcilarServices,
  ...bahcelievlerServices,
  ...esenlerServices,
  ...zeytinburnuServices,
  ...gungorenServices,
  ...bakirkoyServices,
  ...esenyurtServices,
  ...beylikduzuServices,
  ...buyukcekmeceServices,
  ...silivriServices,
  ...catalcaServices,
  ...kucukcekmeceServices,
  ...basaksehirServices,
  ...avcilarServices,
];

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

  const pseoPages: MetadataRoute.Sitemap = allPseoServices.map((service) => ({
    url: `${BASE_URL}/${service.urlSlug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.slug === "avukat" ? 0.8 : 0.6,
  }));

  return [...staticPages, ...practiceAreaPages, ...postPages, ...pseoPages];
}
