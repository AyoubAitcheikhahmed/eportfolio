import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

// Kept out of lib/content.js: remark-gfm/rehype-highlight are ESM-only and content.js must load in plain node.
export const compileMdx = source =>
  serialize(source, { mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeHighlight] } })
