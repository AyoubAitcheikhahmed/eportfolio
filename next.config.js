module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/posts', destination: '/blog', permanent: true },
      { source: '/projects/ulteamMobile', destination: '/projects/ulteam-mobile', permanent: true },
      { source: '/projects/sgsfoodipro', destination: '/projects/sgs-foodipro', permanent: true }
    ]
  }
}
