import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Northstar Labs — Finish your AI-built MVP before your investor pitch";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "#fafafa",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "26px", fontWeight: 600 }}>Northstar Labs</div>
            <div style={{ fontSize: "16px", color: "#a3a3a3" }}>
              MVP rescue for AI-stuck founders
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            You built it with AI. It almost works. We finish it before your pitch.
          </div>
          <div style={{ fontSize: "24px", color: "#a3a3a3", maxWidth: "900px" }}>
            $199 audit · $7.5k 2-week sprint · $19.5k 4-week investor-ready MVP
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            color: "#a3a3a3",
          }}
        >
          <span>30+ MVPs shipped · 10M+ downloads engineered</span>
          <span>By Aniket Mishra</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
