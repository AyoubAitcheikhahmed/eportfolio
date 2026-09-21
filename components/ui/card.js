import NextLink from 'next/link'
import { Box, Image, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

// Listing card used by /blog and /projects.
const Card = ({ href, title, cover, meta, children }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      {cover && <Image src={cover} alt={title} maxW="100%" loading="lazy" borderRadius="xl" boxShadow="xl" />}
      <NextLink href={href} passHref>
        <LinkOverlay>
          <Text mt={3} fontSize={24} fontWeight="bold">
            {title}
          </Text>
        </LinkOverlay>
      </NextLink>
      {meta && (
        <Text fontSize={16} opacity={0.8}>
          {meta}
        </Text>
      )}
      <Text fontSize={16} fontStyle="italic" mb={5}>
        {children}
      </Text>
    </LinkBox>
  </Box>
)

export default Card
