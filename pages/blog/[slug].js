import EntryPage from '../../components/layout/entry-page'
import { getPublishedSlugs, getEntry } from '../../lib/content'
import { compileMdx } from '../../lib/mdx'

const Post = props => <EntryPage {...props} basePath="/blog" showDate />

export const getStaticPaths = async () => ({
  paths: getPublishedSlugs('blog').map(slug => ({ params: { slug } })),
  fallback: false
})

export const getStaticProps = async ({ params }) => {
  const { meta, content } = getEntry('blog', params.slug)
  return { props: { meta, source: await compileMdx(content) } }
}

export default Post
