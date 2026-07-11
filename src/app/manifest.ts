import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dar e Arqam Schools Karachi",
    short_name: "DASKHI",
    description: "Quality education rooted in Islamic values. 12,000+ students across 50+ branches in Karachi.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F2ED",
    theme_color: "#2563EB",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
