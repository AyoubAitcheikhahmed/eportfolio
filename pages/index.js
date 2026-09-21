import { Box, Button, Container,Divider,Heading, Image, ListItem, UnorderedList, useColorModeValue} from "@chakra-ui/react"
import Section from "../components/ui/section"
import Paragraph from "../components/ui/paragraph"
import { AtSignIcon } from "@chakra-ui/icons"
import { BioSection,BioYear, WorkDetails,CompanyDetails,WorkTasks} from "../components/ui/bio"
import NextLink from 'next/link'
import resume from "../content/resume.json"

const  Page = () => {

    return (
    <Container>

        <Box borderRadius="lg"  bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={4} mb={6} mt={{ base: 8, md: 20 }} align="center">
            Hello, I&apos;m a Java developer based in Antwerp, Belgium!
        </Box>
        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading  as="h2" variant="page-title">
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
            <Paragraph>{resume.profile}</Paragraph>
            <Box
            align="center" my={4}>
            <NextLink href="/projects" passHref>
            <Button href="/projects" leftIcon={<AtSignIcon />} colorScheme="teal">
                Check out my Portfolio
            </Button>
            </NextLink>
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
            {[...resume.education].reverse().map(e => (
                <BioSection key={e.year}>
                    <BioYear>{e.year}</BioYear>
                    {e.text}
                </BioSection>
            ))}
            <BioSection>
                <BioYear>Now </BioYear>
                Java developer at Sopra Steria.
            </BioSection>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Work Experience
            </Heading>
            {resume.work.map((job, i) => (
                <div key={job.employer + job.period}>
                    <BioSection>
                        <BioYear>{job.employer}</BioYear>
                        <CompanyDetails>{job.context ? `${job.context} - ` : ''}{job.period}</CompanyDetails>
                        <WorkDetails>{job.role}</WorkDetails>
                    </BioSection>
                    <WorkTasks>
                        <UnorderedList>
                            {job.bullets.map(b => <ListItem key={b}>{b}</ListItem>)}
                        </UnorderedList>
                    </WorkTasks>
                    {i < resume.work.length - 1 && <Divider/>}
                </div>
            ))}
        </Section>

    </Container>
    )
}

export default Page
