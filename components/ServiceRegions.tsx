import Link from "next/link";
import { ADLIYE_DISTRICTS } from "@/lib/calculators/adliyeBulucu";
import { TARGET_DISTRICTS } from "@/lib/pseo/deep";

const SERVICES: { slug: string; suffix: string; label: string }[] = [
  { slug: "bosanma", suffix: "bosanma-avukati", label: "Boşanma" },
  { slug: "gayrimenkul", suffix: "gayrimenkul-avukati", label: "Gayrimenkul" },
  { slug: "kira-tahliye", suffix: "kira-tahliye-avukati", label: "Kira ve tahliye" },
  { slug: "miras", suffix: "miras-avukati", label: "Miras" },
  { slug: "ceza", suffix: "ceza-avukati", label: "Ceza" },
];

/** Hedef ilçeleri ve bağlı adliyelerini listeleyen bölüm (ana sayfa ve /ilceler). */
export default function ServiceRegions({ showServices = false }: { showServices?: boolean }) {
  const districts = TARGET_DISTRICTS.map((s) => ADLIYE_DISTRICTS.find((d) => d.slug === s)!).filter(Boolean);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {districts.map((d) => (
        <div key={d.slug} className="p-5 rounded-lg border bg-white" style={{ borderColor: "#EBE0D4" }}>
          <Link href={`/${d.slug}-avukat`} className="text-base font-semibold underline-offset-4 hover:underline" style={{ color: "#14342B" }}>
            {d.name} Avukat
          </Link>
          <p className="text-xs mt-1" style={{ color: "#3D5A50" }}>Bağlı adliye: {d.courthouse}</p>
          {showServices && (
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${d.slug}-${s.suffix}`} className="text-xs underline" style={{ color: "#14342B" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
