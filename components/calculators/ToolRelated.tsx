import Link from "next/link";

export default function ToolRelated({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
      <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: "#C5A880" }}>
        İlgili İçerikler
      </p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm font-medium underline" style={{ color: "#14342B" }}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
