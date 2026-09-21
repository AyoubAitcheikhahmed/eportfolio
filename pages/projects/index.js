import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../../components/ui/section'
import Card from '../../components/ui/card'
import Seo from '../../components/layout/seo'
import { getAllEntries } from '../../lib/content'

const Projects = ({ entries }) => (
  <Container>
    <Seo title="Projects" description="Projects by Ayoub Aitcheikhahmed" path="/projects" />
    <Heading mt={{ base: 4, md: 0 }} as="h3" fontSize={20} mb={4}>
      Projects
    </Heading>
    <SimpleGrid columns={[1, 1, 1]} gap={6}>
      {entries.map(e => (
        <Section key={e.slug}>
          <Card href={`/projects/${e.slug}`} title={e.title} cover={e.cover}>
            {e.description}
          </Card>
        </Section>
      ))}
    </SimpleGrid>
  </Container>
)

export const getStaticProps = async () => ({ props: { entries: getAllEntries('projects') } })

export default Projects
