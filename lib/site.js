// CommonJS so scripts/generate-feeds.js (plain node) can share it with the pages.
module.exports = {
  SITE_URL: (process.env.NEXT_PUBLIC_SITE_URL || 'https://aitcheikhahmed.vercel.app').replace(/\/$/, ''),
  SITE_NAME: 'Ayoub Aitcheikhahmed'
}
