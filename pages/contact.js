import { Button, Container, Heading, Link, Stack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../components/ui/section'
import Paragraph from '../components/ui/paragraph'
import Seo from '../components/layout/seo'

const links = [
  { label: 'Email', href: 'mailto:ayoub.aitcheikhahmed@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aitcheikhahmed' },
  { label: 'GitHub', href: 'https://github.com/AyoubAitcheikhahmed' }
]

const Contact = () => (
  <Container>
    <Seo title="Contact" description="Get in touch with Ayoub Aitcheikhahmed" path="/contact" />
    <Heading mt={{ base: 4, md: 0 }} as="h3" fontSize={24} mb={4}>
      Contact
    </Heading>
    <Section>
      <Paragraph>Interested in working together or just want to say hi? Reach me at <Link href="mailto:ayoub.aitcheikhahmed@gmail.com">ayoub.aitcheikhahmed@gmail.com</Link> or find me here:</Paragraph>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mt={6}>
        {links.map(l => (
          <Button key={l.label} as="a" href={l.href} {...(l.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer", rightIcon: <ExternalLinkIcon /> })} colorScheme="teal">
            {l.label}
          </Button>
        ))}
      </Stack>
    </Section>
  </Container>
)

export default Contact
