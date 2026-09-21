import { Box } from '@chakra-ui/react'

// <Callout type="warning">text</Callout>  (type: info | warning)
const Callout = ({ type = 'info', children }) => (
  <Box
    borderLeftWidth={4}
    borderLeftColor={type === 'warning' ? 'orange.400' : 'teal.400'}
    bg="blackAlpha.100"
    borderRadius="md"
    p={4}
    my={4}
  >
    {children}
  </Box>
)

export default Callout
