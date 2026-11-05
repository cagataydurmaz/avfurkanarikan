import { findMevzuat } from "@/lib/mevzuat";

/** Sayfa metninde geçen kanunlar için mevzuat.gov.tr bağlantıları (doğrulanmış adresler). */
export default function MevzuatKaynak({ text }: { text: string }) {
  const laws = findMevzuat(text);
  if (laws.length === 0) return null;
  return (
    <aside
      className="mt-8 p-5 rounded border text-sm"
      style={{ borderColor: "#EBE0D4", backgroundColor: "#fff", color: "#3D5A50" }}
    >
      <p className="font-semibold mb-2" style={{ color: "#14342B" }}>
        Dayanak mevzuat
      </p>
      <ul className="space-y-1">
        {laws.map((l) => (
          <li key={l.key}>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#14342B" }}
            >
              {l.name} (Kanun No. {l.number})
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs">
        Kaynak: mevzuat.gov.tr. Kanun metinleri değişebilir; işlem yapmadan önce güncel hâlini kontrol ediniz.
      </p>
    </aside>
  );
}
