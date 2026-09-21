import NextLink from 'next/link'
import { Box, Image, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

// Listing card used by /blog and /projects.
const Card = ({ href, title, cover, children }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      {cover && <Image src={cover} alt={title} maxW="100%" loading="lazy" borderRadius="xl" boxShadow="xl" />}
      <NextLink href={href} passHref>
        <LinkOverlay>
          <Text mt={3} fontSize={24}>
            {title}
          </Text>
        </LinkOverlay>
      </NextLink>
      <Text fontSize={16} mb={5}>
        {children}
      </Text>
    </LinkBox>
  </Box>
)

export default Card
