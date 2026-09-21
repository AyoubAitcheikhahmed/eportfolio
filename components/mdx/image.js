import { Box } from '@chakra-ui/react'

// Plain Markdown images: responsive, rounded, lazy, alt text doubles as the caption.
// Spans (not <figure>) because Markdown puts images inside <p>.
const MdxImage = ({ src, alt }) => (
  <Box as="span" display="block" my={6} textAlign="center">
    <Box
      as="img"
      src={src}
      alt={alt}
      loading="lazy"
      display="inline-block"
      maxW="100%"
      h="auto"
      borderRadius="lg"
    />
    {alt && (
      <Box as="span" display="block" fontSize="sm" opacity={0.7} mt={2}>
        {alt}
      </Box>
    )}
  </Box>
)

export default MdxImage
