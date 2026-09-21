import { Button, Container, Heading, Image, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
      <Heading as="h1" fontSize={34} mb={2}>
        {meta.title}
      </Heading>
      <Text fontSize={16} mb={4} opacity={0.8}>
        {showDate && `${meta.date} · ${meta.readingTime} min read`}
      </Text>
      {meta.tags.map(t => (
        <Tag key={t}>{t}</Tag>
      ))}
    </Section>
    <Section delay={0.1}>
      {meta.cover && <Image src={meta.cover} alt={meta.title} borderRadius='xl' boxShadow='xl' maxW='100%' mb={6} />}
      {meta.description && <Text mb={4} fontStyle="italic">{meta.description}</Text>}
      {meta.link && (
        <Button as='a' href={meta.link} target='_blank' rel='noopener noreferrer' rightIcon={<ExternalLinkIcon />} colorScheme='teal' mb={4}>
          View project
        </Button>
      )}
      <MDXRemote {...source} components={components} />
    </Section>
  </Container>
)

export default EntryPage
