import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../components/ui/section'
import Paragraph from '../components/ui/paragraph'
import Seo from '../components/layout/seo'

const PDF_PATH = '/documents/thesis.pdf'

const Thesis = () => (
  <Container>
    <Seo title="Thesis" description="My bachelor thesis" path="/thesis" />
    <Heading mt={{ base: 4, md: 0 }} as="h3" fontSize={24} mb={4}>
      Thesis
    </Heading>
    <Section>
      <Paragraph>My bachelor thesis, submitted at HoGent.</Paragraph>
      <Box my={4}>
        <Button as="a" href={PDF_PATH} target="_blank" rel="noopener noreferrer" leftIcon={<ExternalLinkIcon />} colorScheme="teal" mr={3}>
          Open in new tab
        </Button>
        <Button as="a" href={PDF_PATH} download leftIcon={<DownloadIcon />} variant="outline" colorScheme="teal">
          Download PDF
        </Button>
      </Box>
      <Box borderRadius="xl" boxShadow="xl" overflow="hidden" h={{ base: '70vh', md: '85vh' }}>
        <Box as="iframe" src={PDF_PATH} title="Thesis PDF" w="100%" h="100%" border="0" />
      </Box>
      <Text fontSize="sm" opacity={0.7} mt={2}>
        PDF not showing? Use the buttons above.
      </Text>
    </Section>
  </Container>
)

export default Thesis
