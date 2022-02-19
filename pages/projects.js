import { Container, Heading, SimpleGrid, Divider, } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from '../components/grid-item'
const Projects = () => {
    
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <ProjectGridItem 
                    id="ulteam" 
                    title="Ulteam" 
                    thumbnail={thumbUlteam}
                    >
                        Webshop platform to buy games
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects