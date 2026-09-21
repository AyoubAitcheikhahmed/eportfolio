// Runs as `prebuild`: writes public/sitemap.xml and public/rss.xml so they exist before Next/Vercel read public/.
process.env.NODE_ENV = 'production' // npm scripts leave it unset; make sure drafts are excluded
const fs = require('fs')
const path = require('path')
const { getAllEntries } = require('../lib/content')
const { SITE_URL, SITE_NAME } = require('../lib/site')

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const posts = getAllEntries('blog')
const projects = getAllEntries('projects')

const urls = [
  { loc: '/' },
  { loc: '/blog' },
  { loc: '/projects' },
  ...posts.map(p => ({ loc: `/blog/${p.slug}`, lastmod: p.date })),
  ...projects.map(p => ({ loc: `/projects/${p.slug}`, lastmod: p.date }))
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(u => `  <url><loc>${esc(SITE_URL + u.loc)}</loc>${u.lastmod ? `<lastmod>${esc(u.lastmod)}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${esc(SITE_NAME)}</title>
  <link>${esc(SITE_URL)}/blog</link>
  <description>Blog posts by ${esc(SITE_NAME)}</description>
${posts
  .map(
    p => `  <item>
    <title>${esc(p.title)}</title>
    <link>${esc(SITE_URL)}/blog/${esc(p.slug)}</link>
    <guid>${esc(SITE_URL)}/blog/${esc(p.slug)}</guid>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <description>${esc(p.description)}</description>
  </item>`
  )
  .join('\n')}
</channel>
</rss>
`

fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join('public', 'rss.xml'), rss)
console.log(`feeds: ${urls.length} urls, ${posts.length} posts`)
