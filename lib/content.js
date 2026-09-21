// Generic MDX content helpers. CommonJS on purpose: scripts/generate-feeds.js requires it from plain node.
// Adding a content section = a folder under content/ + two pages that call these with the folder name.
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const ROOT = path.join(process.cwd(), 'content')

// Files starting with "_" (templates) are never content.
const getSlugs = type =>
  fs
    .readdirSync(path.join(ROOT, type))
    .filter(f => f.endsWith('.mdx') && !f.startsWith('_'))
    .map(f => f.replace(/\.mdx$/, ''))

const readingTime = text => Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 200))

// Returns { meta, content } or null. Meta is JSON-serializable (no undefined) for getStaticProps.
const getEntry = (type, slug) => {
  const file = path.join(ROOT, type, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const { data, content } = matter(fs.readFileSync(file, 'utf8'))
  return {
    meta: {
      slug,
      title: data.title,
      description: data.description || '',
      date: String(data.date),
      tags: data.tags || [],
      draft: data.draft === true,
      cover: data.cover || null,
      link: data.link || null,
      readingTime: readingTime(content)
    },
    content
  }
}

// Frontmatter only, newest first. Drafts are hidden in production builds.
const getAllEntries = type =>
  getSlugs(type)
    .map(slug => getEntry(type, slug).meta)
    .filter(m => !(m.draft && process.env.NODE_ENV === 'production'))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

// Slugs to build pages for: everything except drafts in production.
const getPublishedSlugs = type => getAllEntries(type).map(m => m.slug)

module.exports = { getSlugs, getEntry, getAllEntries, getPublishedSlugs }
