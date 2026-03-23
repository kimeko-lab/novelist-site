import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0f0f0f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Amber glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top: Logo + badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#f59e0b",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "20px", height: "3px", background: "#000", borderRadius: "2px", boxShadow: "0 6px 0 #000, 0 12px 0 #000" }} />
            </div>
            <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.5px" }}>
              Novelist
            </span>
          </div>

          <div
            style={{
              background: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.4)",
              borderRadius: "999px",
              padding: "8px 20px",
              color: "#f59e0b",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Windows 10 &amp; 11 · v2.1 · 14-day free trial
          </div>
        </div>

        {/* Middle: Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ color: "#ffffff", fontSize: "68px", fontWeight: "800", lineHeight: "1.05", letterSpacing: "-2px" }}>
              Write your novel.
            </span>
            <span style={{ color: "#f59e0b", fontSize: "68px", fontWeight: "800", lineHeight: "1.05", letterSpacing: "-2px" }}>
              Keep it yours.
            </span>
          </div>
          <p style={{ color: "#a1a1aa", fontSize: "24px", lineHeight: "1.5", maxWidth: "680px", margin: "0" }}>
            Novel writing software for Windows — chapters, characters, plot timeline, corkboard &amp; AI assistant.
          </p>
        </div>

        {/* Bottom: Features + price */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Feature pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["Offline · no account", "Drag-to-reorder chapters", "Character map", "AI assistant (BYOK)"].map((f) => (
              <div
                key={f}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  color: "#d4d4d8",
                  fontSize: "15px",
                }}
              >
                {f}
              </div>
            ))}
          </div>

          {/* Price badge */}
          <div
            style={{
              background: "#f59e0b",
              borderRadius: "16px",
              padding: "16px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
              flexShrink: 0,
              marginLeft: "32px",
            }}
          >
            <span style={{ color: "#000", fontSize: "40px", fontWeight: "800", lineHeight: "1" }}>$49</span>
            <span style={{ color: "rgba(0,0,0,0.6)", fontSize: "13px", fontWeight: "600" }}>one-time · no subscription</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
