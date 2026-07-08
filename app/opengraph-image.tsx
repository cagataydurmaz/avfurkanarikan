import { ImageResponse } from "next/og";

export const alt = "Av. Furkan Arıkan Hukuk Bürosu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d2420 0%, #14342B 50%, #1B3A2F 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: "#C5A880",
            marginBottom: 28,
          }}
        >
          İSTANBUL BAROSU · SİCİL NO: 72621
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
          <div style={{ display: "flex", width: 90, height: 2, background: "#C5A880" }} />
          <div
            style={{
              display: "flex",
              width: 18,
              height: 18,
              border: "2px solid #C5A880",
              transform: "rotate(45deg)",
              margin: "0 24px",
            }}
          />
          <div style={{ display: "flex", width: 90, height: 2, background: "#C5A880" }} />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            fontFamily: "serif",
            color: "#F4EDE4",
          }}
        >
          Av. Furkan Arıkan
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(244,237,228,0.75)",
            marginTop: 28,
            textAlign: "center",
          }}
        >
          Ceza, İş ve Gayrimenkul Hukukunda Dava Takibi ve Hukuki Danışmanlık
        </div>
      </div>
    ),
    { ...size }
  );
}
