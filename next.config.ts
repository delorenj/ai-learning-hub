import type { NextConfig } from "next";
import mdx from '@next/mdx';

const nextConfig: NextConfig = {
  // MDX and default extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'standalone',
  // Add other Next.js config options here as needed
};

export default mdx({
  extension: /\.mdx?$/,
  options: {}
})(nextConfig);
