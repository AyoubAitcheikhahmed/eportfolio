import { Heading, Link, ListItem, OrderedList, Text, UnorderedList, Box } from '@chakra-ui/react'
import Callout from '../components/mdx/callout'
import Figure from '../components/mdx/figure'
import CodeBlock from '../components/mdx/code-block'
import MdxImage from '../components/mdx/image'

// Everything usable inside MDX. To add a component: create it in components/mdx/ and add it here.
// Chakra's CSS reset strips default element styles, so the plain HTML elements are mapped too.
const components = {
  // custom components: <Callout>, <Figure> ...
  Callout,
  Figure,
  // element overrides
  h1: props => <Heading as="h2" fontSize={24} mt={8} mb={3} {...props} />,
  h2: props => <Heading as="h2" variant="section-title" mt={8} {...props} />,
  h3: props => <Heading as="h3" fontSize={18} mt={6} mb={2} {...props} />,
  p: props => <Text my={4} {...props} />,
  a: props => <Link {...props} />,
  ul: props => <UnorderedList my={4} pl={2} {...props} />,
  ol: props => <OrderedList my={4} pl={2} {...props} />,
  li: props => <ListItem my={1} {...props} />,
  blockquote: props => (
    <Box as="blockquote" borderLeftWidth={4} borderLeftColor="teal.400" pl={4} my={4} fontStyle="italic" {...props} />
  ),
  img: MdxImage,
  pre: CodeBlock,
  // block code carries a hljs/language class; inline code gets a light background
  code: ({ className, ...props }) =>
    className ? (
      <code className={className} {...props} />
    ) : (
      <Box as="code" px={1} borderRadius="sm" bg="blackAlpha.200" fontSize="0.9em" {...props} />
    )
}

export default components
