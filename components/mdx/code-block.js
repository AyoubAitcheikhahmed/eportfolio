import { Box } from '@chakra-ui/react'

// Wraps fenced code blocks (<pre>). Colors come from the highlight.js theme imported in _app.js.
const CodeBlock = ({ children }) => (
  <Box as="pre" my={4} borderRadius="lg" overflowX="auto" fontSize="sm">
    {children}
  </Box>
)

export default CodeBlock
