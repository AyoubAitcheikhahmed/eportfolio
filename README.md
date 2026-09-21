# Ayoub's e-portfolio

Next.js (Pages Router) + Chakra UI, deployed on Vercel at https://aitcheikhahmed.vercel.app.

```bash
npm install
npm run dev      # drafts are visible here
npm run build    # runs scripts/generate-feeds.js first (sitemap.xml + rss.xml)
```

Set `NEXT_PUBLIC_SITE_URL` to override the site URL used in Open Graph tags, the sitemap and the RSS feed
(defaults to `https://aitcheikhahmed.vercel.app`).

## Adding content

Everything under `content/` is MDX with frontmatter. No code changes needed.

```
content/blog/<slug>.mdx       ->  /blog/<slug>
content/projects/<slug>.mdx   ->  /projects/<slug>
```

Files starting with `_` (the templates) are ignored.

### New blog post

1. Copy `content/blog/_template.mdx` to `content/blog/my-post.mdx` (the file name is the URL slug).
2. Fill in the frontmatter:

   | Field         | Notes                                                                 |
   | ------------- | --------------------------------------------------------------------- |
   | `title`       | Required.                                                             |
   | `description` | One sentence, used in listings, meta description and social previews. |
   | `date`        | Quoted string, `"YYYY-MM-DD"`. Posts are sorted newest first.         |
   | `tags`        | Array of strings.                                                     |
   | `draft`       | `true` or `false`, see [Drafts](#drafts).                             |
   | `cover`       | Optional image path, used for listings and social previews.           |

3. Write the post in Markdown (GFM tables and task lists and syntax-highlighted code blocks work).
4. Commit and push. Reading time is computed automatically, the sitemap and RSS feed are regenerated on build.

### New project page

Same thing with `content/projects/_template.mdx` -> `content/projects/my-project.mdx`.
Projects are listed on `/projects` sorted by `date`, newest first.

### Images

Put images in `public/images/` and reference them from the site root:

- Blog post: `public/images/blog/<slug>/pic.png` -> `![Caption text](/images/blog/<slug>/pic.png)`
- Project: `public/images/projects/<slug>/cover.jpg` -> `cover: "/images/projects/<slug>/cover.jpg"`

Plain Markdown images are responsive, rounded and lazy-loaded, and the alt text is shown as a caption.
For an explicit caption use `<Figure src="..." alt="..." caption="..." />`.

### Components inside MDX

Available out of the box: `<Callout type="info|warning">`, `<Figure />`, and styled versions of headings, links, lists,
quotes, images and code.

To add your own:

1. Create `components/mdx/my-component.js` (a normal React component).
2. Register it in `lib/mdx-components.js` (`const components = { ..., MyComponent }`).
3. Use `<MyComponent />` in any `.mdx` file.

### Drafts

`draft: true` posts and projects show up in `npm run dev` (marked "(draft)") but are excluded from production builds:
no page, no listing entry, no sitemap or RSS entry. Set `draft: false` (or remove the file) when you're ready to publish.

### New content section

Create `content/<type>/`, then copy `pages/blog/index.js` and `pages/blog/[slug].js` to `pages/<type>/` and replace
`'blog'` with `<type>`. `lib/content.js` is generic, so nothing else changes.
