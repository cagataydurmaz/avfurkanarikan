import Link from "next/link";

export default function ToolBreadcrumb({
  current,
  maxWidth = "max-w-3xl",
}: {
  current?: string;
  maxWidth?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-2.5"
      style={{ backgroundColor: "#14342B", borderTop: "1px solid rgba(197,168,128,0.15)" }}
    >
      <div className={`${maxWidth} mx-auto px-5 md:px-8`}>
        <ol className="flex items-center flex-wrap gap-x-2 text-xs">
          <li>
            <Link href="/" className="hover:underline" style={{ color: "rgba(244,237,228,0.5)" }}>
              Ana Sayfa
            </Link>
          </li>
          <li aria-hidden="true" style={{ color: "rgba(244,237,228,0.25)" }}>/</li>
          {current ? (
            <>
              <li>
                <Link href="/araclar" className="hover:underline" style={{ color: "rgba(244,237,228,0.5)" }}>
                  Araçlar
                </Link>
              </li>
              <li aria-hidden="true" style={{ color: "rgba(244,237,228,0.25)" }}>/</li>
              <li style={{ color: "#C5A880" }} aria-current="page">
                {current}
              </li>
            </>
          ) : (
            <li style={{ color: "#C5A880" }} aria-current="page">
              Araçlar
            </li>
          )}
        </ol>
      </div>
    </nav>
  );
}
