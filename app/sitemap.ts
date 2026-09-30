import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { practiceAreas } from "@/lib/practiceAreas";
import { tools } from "@/lib/calculators/tools";
import { besiktas } from "@/lib/pseo/besiktas";
import { besiktasServices } from "@/lib/pseo/besiktasServices";
import { sisli } from "@/lib/pseo/sisli";
import { sisliServices } from "@/lib/pseo/sisliServices";
import { beyoglu } from "@/lib/pseo/beyoglu";
import { beyogluServices } from "@/lib/pseo/beyogluServices";
import { kagithane } from "@/lib/pseo/kagithane";
import { kagithaneServices } from "@/lib/pseo/kagithaneServices";
import { fatih } from "@/lib/pseo/fatih";
import { fatihServices } from "@/lib/pseo/fatihServices";
import { sariyer } from "@/lib/pseo/sariyer";
import { sariyerServices } from "@/lib/pseo/sariyerServices";
import { eyupsultan } from "@/lib/pseo/eyupsultan";
import { eyupsultanServices } from "@/lib/pseo/eyupsultanServices";
import { bayrampasa } from "@/lib/pseo/bayrampasa";
import { bayrampasaServices } from "@/lib/pseo/bayrampasaServices";
import { arnavutkoy } from "@/lib/pseo/arnavutkoy";
import { arnavutkoyServices } from "@/lib/pseo/arnavutkoyServices";
import { bagcilar } from "@/lib/pseo/bagcilar";
import { bagcilarServices } from "@/lib/pseo/bagcilarServices";
import { bahcelievler } from "@/lib/pseo/bahcelievler";
import { bahcelievlerServices } from "@/lib/pseo/bahcelievlerServices";
import { esenler } from "@/lib/pseo/esenler";
import { esenlerServices } from "@/lib/pseo/esenlerServices";
import { zeytinburnu } from "@/lib/pseo/zeytinburnu";
import { zeytinburnuServices } from "@/lib/pseo/zeytinburnuServices";
import { gungoren } from "@/lib/pseo/gungoren";
import { gungorenServices } from "@/lib/pseo/gungorenServices";
import { bakirkoy } from "@/lib/pseo/bakirkoy";
import { bakirkoyServices } from "@/lib/pseo/bakirkoyServices";
import { esenyurt } from "@/lib/pseo/esenyurt";
import { esenyurtServices } from "@/lib/pseo/esenyurtServices";
import { beylikduzu } from "@/lib/pseo/beylikduzu";
import { beylikduzuServices } from "@/lib/pseo/beylikduzuServices";
import { buyukcekmece } from "@/lib/pseo/buyukcekmece";
import { buyukcekmeceServices } from "@/lib/pseo/buyukcekmeceServices";
import { silivri } from "@/lib/pseo/silivri";
import { silivriServices } from "@/lib/pseo/silivriServices";
import { catalca } from "@/lib/pseo/catalca";
import { catalcaServices } from "@/lib/pseo/catalcaServices";
import { kucukcekmece } from "@/lib/pseo/kucukcekmece";
import { kucukcekmeceServices } from "@/lib/pseo/kucukcekmeceServices";
import { basaksehir } from "@/lib/pseo/basaksehir";
import { basaksehirServices } from "@/lib/pseo/basaksehirServices";
import { avcilar } from "@/lib/pseo/avcilar";
import { avcilarServices } from "@/lib/pseo/avcilarServices";
import { beykoz } from "@/lib/pseo/beykoz";
import { beykozServices } from "@/lib/pseo/beykozServices";
import { gaziosmanpasa } from "@/lib/pseo/gaziosmanpasa";
import { gaziosmanpasaServices } from "@/lib/pseo/gaziosmanpasaServices";
import { sultangazi } from "@/lib/pseo/sultangazi";
import { sultangaziServices } from "@/lib/pseo/sultangaziServices";
import { uskudar } from "@/lib/pseo/uskudar";
import { uskudarServices } from "@/lib/pseo/uskudarServices";
import { kadikoy } from "@/lib/pseo/kadikoy";
import { kadikoyServices } from "@/lib/pseo/kadikoyServices";
import { atasehir } from "@/lib/pseo/atasehir";
import { atasehirServices } from "@/lib/pseo/atasehirServices";
import { umraniye } from "@/lib/pseo/umraniye";
import { umraniyeServices } from "@/lib/pseo/umraniyeServices";
import { maltepe } from "@/lib/pseo/maltepe";
import { maltepeServices } from "@/lib/pseo/maltepeServices";
import { kartal } from "@/lib/pseo/kartal";
import { kartalServices } from "@/lib/pseo/kartalServices";
import { pendik } from "@/lib/pseo/pendik";
import { pendikServices } from "@/lib/pseo/pendikServices";
import { sancaktepe } from "@/lib/pseo/sancaktepe";
import { sancaktepeServices } from "@/lib/pseo/sancaktepeServices";
import type { PseoDistrict, PseoService } from "@/lib/pseo/types";

const BASE_URL = "https://furkanarikan.av.tr";

const pseoGroups: { district: PseoDistrict; services: PseoService[] }[] = [
  { district: besiktas, services: besiktasServices },
  { district: sisli, services: sisliServices },
  { district: beyoglu, services: beyogluServices },
  { district: kagithane, services: kagithaneServices },
  { district: fatih, services: fatihServices },
  { district: sariyer, services: sariyerServices },
  { district: eyupsultan, services: eyupsultanServices },
  { district: bayrampasa, services: bayrampasaServices },
  { district: arnavutkoy, services: arnavutkoyServices },
  { district: bagcilar, services: bagcilarServices },
  { district: bahcelievler, services: bahcelievlerServices },
  { district: esenler, services: esenlerServices },
  { district: zeytinburnu, services: zeytinburnuServices },
  { district: gungoren, services: gungorenServices },
  { district: bakirkoy, services: bakirkoyServices },
  { district: esenyurt, services: esenyurtServices },
  { district: beylikduzu, services: beylikduzuServices },
  { district: buyukcekmece, services: buyukcekmeceServices },
  { district: silivri, services: silivriServices },
  { district: catalca, services: catalcaServices },
  { district: kucukcekmece, services: kucukcekmeceServices },
  { district: basaksehir, services: basaksehirServices },
  { district: avcilar, services: avcilarServices },
  { district: beykoz, services: beykozServices },
  { district: gaziosmanpasa, services: gaziosmanpasaServices },
  { district: sultangazi, services: sultangaziServices },
  { district: uskudar, services: uskudarServices },
  { district: kadikoy, services: kadikoyServices },
  { district: atasehir, services: atasehirServices },
  { district: umraniye, services: umraniyeServices },
  { district: maltepe, services: maltepeServices },
  { district: kartal, services: kartalServices },
  { district: pendik, services: pendikServices },
  { district: sancaktepe, services: sancaktepeServices },
];

const allPseoServices = pseoGroups.flatMap((g) =>
  g.services.map((service) => ({ service, lastModified: new Date(g.district.publishedDate) }))
);

// lastmod gerçek içerik değişikliğini yansıtmalı; build zamanı kullanılmaz.
const HOME_UPDATED = new Date("2026-09-30");
const TOOLS_INDEX_UPDATED = new Date("2026-09-30");
const PRIVACY_UPDATED = new Date("2026-07-11");
const PRACTICE_AREAS_UPDATED = new Date("2026-07-19");
const TOOL_UPDATED: Record<string, Date> = {
  "kira-artisi-hesaplama": new Date("2026-09-30"),
  "nafaka-artisi-hesaplama": new Date("2026-09-30"),
};
const TOOL_DEFAULT_UPDATED = new Date("2026-07-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPostDate = new Date(
    Math.max(...posts.map((p) => new Date(p.date).getTime()))
  );

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: HOME_UPDATED,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/makaleler`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/araclar`,
      lastModified: TOOLS_INDEX_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gizlilik-politikasi`,
      lastModified: PRIVACY_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const practiceAreaPages: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${BASE_URL}/calisma-alanlari/${area.slug}`,
    lastModified: PRACTICE_AREAS_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/makaleler/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const pseoPages: MetadataRoute.Sitemap = allPseoServices.map(({ service, lastModified }) => ({
    url: `${BASE_URL}/${service.urlSlug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: service.slug === "avukat" ? 0.8 : 0.6,
  }));

  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE_URL}/${tool.slug}`,
    lastModified: TOOL_UPDATED[tool.slug] ?? TOOL_DEFAULT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...practiceAreaPages, ...postPages, ...pseoPages, ...toolPages];
}
