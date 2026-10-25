import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nirmal-portfolio-azure.vercel.app";

  return [
    { url: baseUrl },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/skills` },
    { url: `${baseUrl}/projects` },
    { url: `${baseUrl}/contact` },
  ];
}