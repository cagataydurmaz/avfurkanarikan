import { ImageResponse } from "next/og";
import { getPostBySlug, posts } from "@/lib/posts";

export const alt = "Av. Furkan Arıkan Hukuk Bürosu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Av. Furkan Arıkan Hukuk Bürosu";
  const category = post?.category ?? "Hukuk Makaleleri";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0d2420 0%, #14342B 50%, #1B3A2F 100%)",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 36,
            }}
          >
            <div style={{ display: "flex", width: 40, height: 2, background: "#C5A880" }} />
            <div
              style={{
                display: "flex",
                fontSize: 20,
                letterSpacing: 4,
                color: "#C5A880",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              {category}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 70 ? 52 : 60,
              fontWeight: 700,
              fontFamily: "serif",
              color: "#F4EDE4",
              lineHeight: 1.25,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontFamily: "serif",
              fontWeight: 700,
              color: "#F4EDE4",
            }}
          >
            Av. Furkan Arıkan
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: 3,
              color: "rgba(244,237,228,0.6)",
            }}
          >
            İSTANBUL BAROSU · SİCİL NO: 72621
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
