import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "NextGenApex-portfolio-website";

const nextConfig: NextConfig = {
  output: "export",
  // basePath только в production — в dev сайт открывается на localhost:3000
  basePath: isProd ? `/${repoName}` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Разрешаем доступ с локальной сети (192.168.0.110)
  allowedDevOrigins: ["192.168.0.110"],
};

export default nextConfig;
