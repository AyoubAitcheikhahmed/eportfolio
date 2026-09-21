import { Badge } from '@chakra-ui/react'

const Tag = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export default Tag
