/** @type {import('next').NextConfig} */

import withVideos from "next-videos";

const nextConfig = {
  output: "export",
  basePath: "/chaek",

  images: {
    unoptimized: true,
  },
};

export default withVideos(nextConfig);
