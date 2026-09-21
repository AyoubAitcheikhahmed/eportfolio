import { Box, Image } from '@chakra-ui/react'

// <Figure src="/images/blog/slug/pic.png" alt="..." caption="..." />
const Figure = ({ src, alt = '', caption }) => (
  <Box as="figure" my={6} textAlign="center">
    <Image src={src} alt={alt} loading="lazy" borderRadius="xl" boxShadow="xl" maxW="100%" h="auto" display="inline-block" />
    {caption && (
      <Box as="figcaption" fontSize="sm" opacity={0.7} mt={2}>
        {caption}
      </Box>
    )}
  </Box>
)

export default Figure
