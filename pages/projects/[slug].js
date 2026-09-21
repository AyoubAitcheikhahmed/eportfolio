import EntryPage from '../../components/layout/entry-page'
import { getPublishedSlugs, getEntry } from '../../lib/content'
import { compileMdx } from '../../lib/mdx'

const Project = props => <EntryPage {...props} basePath="/projects" />

export const getStaticPaths = async () => ({
  paths: getPublishedSlugs('projects').map(slug => ({ params: { slug } })),
  fallback: false
})

export const getStaticProps = async ({ params }) => {
  const { meta, content } = getEntry('projects', params.slug)
  return { props: { meta, source: await compileMdx(content) } }
}

export default Project
