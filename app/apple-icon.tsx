import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          background: "#f7f7f5",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
          color: "#171717",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: 152,
            lineHeight: 1,
          }}
        >
          G
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 12.5,
            left: 93,
            fontSize: 152,
            lineHeight: 1,
          }}
        >
          T
        </div>
      </div>
    ),
    { ...size },
  );
}
