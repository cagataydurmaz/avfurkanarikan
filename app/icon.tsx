import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14342B",
          color: "#C5A880",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "serif",
        }}
      >
        FA
      </div>
    ),
    { ...size }
  );
}
