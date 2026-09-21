import { Container, Heading, Text } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import Section from '../ui/section'
import Tag from '../ui/tag'
import Seo from './seo'
import components from '../../lib/mdx-components'

// One MDX entry (post, project...). Used by pages/<section>/[slug].js.
const EntryPage = ({ meta, source, basePath, showDate }) => (
  <Container>
    <Seo
      title={meta.title}
      description={meta.description}
      cover={meta.cover}
      path={`${basePath}/${meta.slug}`}
      type={showDate ? 'article' : 'website'}
    />
    <Section>
      <Heading as="h1" fontSize={28} mb={2}>
        {meta.title}
        {meta.draft && ' (draft)'}
      </Heading>
      <Text fontSize={14} mb={4} opacity={0.8}>
        {showDate && `${meta.date} · ${meta.readingTime} min read`}
      </Text>
      {meta.tags.map(t => (
        <Tag key={t}>{t}</Tag>
      ))}
    </Section>
    <Section delay={0.1}>
      <MDXRemote {...source} components={components} />
    </Section>
  </Container>
)

export default EntryPage
