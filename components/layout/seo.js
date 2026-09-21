import Head from 'next/head'
import { SITE_URL, SITE_NAME } from '../../lib/site'

// <title>, description and Open Graph tags. Layout only sets a default title, this one wins on content pages.
const Seo = ({ title, description, cover, path, type = 'website' }) => {
  const fullTitle = `${title} - ${SITE_NAME}`
  const image = cover && `${SITE_URL}${cover}`
  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${SITE_URL}${path}`} />
      <meta property="og:site_name" content={SITE_NAME} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
    </Head>
  )
}

export default Seo
