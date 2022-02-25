import { Box, Button, Container,Heading, Image, useColorModeValue} from "@chakra-ui/react"
import Head from "next/head"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { AtSignIcon } from "@chakra-ui/icons"
import { BioSection,BioYear } from "../components/bio"
const  Page = () => {
    return (
    <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={4} mb={6} mt={6} align="center">
            Hello, I&apos;m a Computer Science student based in Belgium!
        </Box>
        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Ayoub Aitcheikhahmed
                </Heading>
                <p>Pixelart, Computer science, games</p>
            </Box>
            <Box
            flexShrink={0}
            mt={{ base: 4,md: 0}}
            ml={{ md: 6}}
            align="center"
            >
                <Image 
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/ayoub.jpg"
                alt="Profile image"
                />

            </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Profile
            </Heading>
            <Paragraph>Certified software development and graduate
                of the university of technology in Agadir, Morocco.
                Strong attention to detail and excellent critical
                thinking skills and the crucial ability to function
                well in a team setting.
            </Paragraph>
            <Box
            align="center" my={4}>
            <Button href="/projects" leftIcon={<AtSignIcon />} colorScheme="teal">
                Check out my Portfolio
            </Button>
            </Box>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Biography
            </Heading>
            <BioSection>
                <BioYear>1995</BioYear>
                Born in Tizi, Morocco.
            </BioSection>
            <BioSection>
                <BioYear>2015</BioYear>
                Graduated of École de Technologie d'Agadir, Computer Engineering. 
            </BioSection>
            <BioSection>
                <BioYear>2019</BioYear>
                Completed the preparatory year of Dutch in the university of Gent.
            </BioSection>
            <BioSection>
                <BioYear>Now </BioYear>
                Bachelor student in computer science at Hogent. 
            </BioSection>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I ❤️
            </Heading>
            <Paragraph>
                Coding, Game development, Pixelart, Playing Banjo, Painting, 
                Machine Learning, Robotics, Arduino
            </Paragraph>
        </Section>

    </Container>
    )
}

export default Page
