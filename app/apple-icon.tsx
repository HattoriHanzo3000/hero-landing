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
        }}
      >
        <div
          style={{
            fontSize: 168,
            fontWeight: 700,
            letterSpacing: "-0.1em",
            color: "#171717",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 0.85,
            marginTop: 14,
          }}
        >
          GT
        </div>
      </div>
    ),
    { ...size },
  );
}
