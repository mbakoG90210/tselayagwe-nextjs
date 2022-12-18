/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = {
  nextConfig,
  env: {
    PUBLIC_ACCESS_KEY: process.env.PUBLIC_ACCESS_KEY,
  },
}
