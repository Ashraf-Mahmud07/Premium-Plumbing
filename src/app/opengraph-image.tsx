import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Branded OG image (logo on ink background with the accent) — inherited by
 * every route that doesn't define its own. Generated statically at build time.
 */
export const alt = "OX Plumbing — 24/7 Local Plumber in Mesa, AZ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/images/ox-plumbing-logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          gap: 36,
          background: "#0B0D10",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -320,
            left: 300,
            width: 700,
            height: 500,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(245,137,31,0.25) 0%, rgba(245,137,31,0) 65%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={640} height={89} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#F5A94F",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#4ADE80" }} />
          24/7 Local Plumber in Mesa, AZ — (602) 905-3722
        </div>
        <div style={{ color: "#A8AEB8", fontSize: 24 }}>
          Licensed &amp; Insured · ROC #347174 · Serving the East Valley
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: "#F5891F",
          }}
        />
      </div>
    ),
    size,
  );
}
