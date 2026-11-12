import Link from "next/link";
import { ADLIYE_DISTRICTS } from "@/lib/calculators/adliyeBulucu";
import { TARGET_DISTRICTS } from "@/lib/pseo/deep";

/** Hizmet bölgelerini sade ilçe adlarıyla listeler. */
export default function ServiceRegions() {
  const districts = TARGET_DISTRICTS.map((s) => ADLIYE_DISTRICTS.find((d) => d.slug === s)).filter(
    (d): d is (typeof ADLIYE_DISTRICTS)[number] => Boolean(d),
  );
  return (
    <ul className="flex flex-wrap gap-3">
      {districts.map((d) => (
        <li key={d.slug}>
          <Link
            href={`/${d.slug}-avukat`}
            className="inline-block px-4 py-2 rounded-full border text-sm transition-colors duration-200 hover:bg-white"
            style={{ borderColor: "#D9CBB8", color: "#14342B" }}
          >
            {d.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
