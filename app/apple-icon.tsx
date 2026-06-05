import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f7f5",
          borderRadius: 32,
        }}
      >
        <div
          style={{
            fontSize: 108,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#171717",
            fontFamily: "system-ui, sans-serif",
            marginTop: 8,
          }}
        >
          G
        </div>
      </div>
    ),
    { ...size },
  );
}
