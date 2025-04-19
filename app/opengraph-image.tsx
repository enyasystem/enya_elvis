import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Enya Elvis - Full-Stack Developer & AI Enthusiast"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom right, #1e1b4b, #312e81)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 48,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "60%",
        }}
      >
        <div
          style={{
            backgroundImage: "linear-gradient(to right, #8b5cf6, #3b82f6)",
            backgroundClip: "text",
            color: "transparent",
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 24,
          }}
        >
          Enya Elvis
        </div>
        <div
          style={{
            fontSize: 36,
            color: "white",
            marginBottom: 48,
            textAlign: "left",
          }}
        >
          Full-Stack Developer & AI Enthusiast
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 24,
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: 8,
              color: "white",
              fontSize: 24,
            }}
          >
            React
          </div>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: 8,
              color: "white",
              fontSize: 24,
            }}
          >
            Next.js
          </div>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: 8,
              color: "white",
              fontSize: 24,
            }}
          >
            AI
          </div>
        </div>
      </div>
      <div
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid rgba(139, 92, 246, 0.5)",
          boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Avatar placeholder - in production this would use the actual image */}
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#312e81",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 36,
            fontWeight: "bold",
          }}
        >
          EE
        </div>
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
