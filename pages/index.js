import { Box, Button, Container,Divider,Heading, Image, ListItem, UnorderedList, useColorModeValue} from "@chakra-ui/react"
import Head from "next/head"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { AtSignIcon } from "@chakra-ui/icons"
import { BioSection,BioYear, WorkDetails,CompanyDetails,WorkTasks} from "../components/bio"
import panther from "../public/images/panther_walk.gif"
import NextLink from 'next/link'
const  Page = () => {
    const panther = "images/panther_navbar_2.gif";
    const pantherIdle = `/images/panther_navbar_1.gif`
    const pantherAttack = `/images/panther_navbar_2.gif`

    return (
    <Container>

        <Box borderRadius="lg"  bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={4} mb={6} mt={20} align="center">
            Hello, I&apos;m a Computer Science student based in Belgium!
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
            <Paragraph>Certified software development and graduate
                of the university of technology in Agadir, Morocco.
                Strong attention to detail and excellent critical
                thinking skills and the crucial ability to function
                well in a team setting.
            </Paragraph>
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
                Work Experience
            </Heading>
            <BioSection>
                <BioYear>Foodipro </BioYear><CompanyDetails>Agadir, Morocco -  March 2017 - June 2018</CompanyDetails>
                <WorkDetails>Programmer</WorkDetails>
            </BioSection>
            <WorkTasks>
            <UnorderedList>
                    <ListItem>
                        Managed the company's internal network and worked on the creation of a managment solution written
                        with PHP, mySQL, and bootstrap.
                    </ListItem>
                    <ListItem>
                        Ensured and improved user authentification and data security.
                    </ListItem>
                    <ListItem>
                        Was responsible to help my collegues troubleshouting their IT related issues
                    </ListItem>
                    <ListItem>
                        Was responsible for for designing banners, flayers, contact cards , digital posts and advertisments and
                        video content creation using Adobe photoshop, illustrator and premiere.
                    </ListItem>
                </UnorderedList>
                </WorkTasks>
            <Divider/>

            <BioSection>
                <BioYear>ProBuns's </BioYear><CompanyDetails>Agadir, Morocco -  July 2016 - December 2016</CompanyDetails>
                <WorkDetails>Programmer / IT helpdesk</WorkDetails>
            </BioSection>
            <WorkTasks>
            <UnorderedList>
                    <ListItem>
                    Creation of a software that manages daily income and uses data to show it in graphes, Helped the
                    accountant to do 30% less and faster work, written in VBA.
                    </ListItem>
                    <ListItem>
                    Installing and configuring computer hardware, software, systems, networks, printers and scanners.
                    Monitoring and maintaining computer systems and networks.
                    </ListItem>
                    <ListItem>
                    Creating delivery vehicle wrapping designs.
                    </ListItem>
                    <ListItem>
                    created probuns.ma website using wordpress.
                    </ListItem>
                </UnorderedList>
                </WorkTasks>
            <Divider/>
            <BioSection>
                <BioYear>Vala Orange</BioYear><CompanyDetails>Agadir, Morocco -  June 2014 - August 2014</CompanyDetails>
                <WorkDetails>Internship</WorkDetails>
            </BioSection>
            <WorkTasks>
            <UnorderedList>
                    <ListItem>
                        Worked on an algorithm that improved text correction and detects spam data in the database
                    </ListItem>
                </UnorderedList>
                </WorkTasks>
            <Divider/>
            <BioSection>
                <BioYear>Net Impression</BioYear><CompanyDetails>Agadir, Morocco -  June 2014 - August 2014</CompanyDetails>
                <WorkDetails>Internship</WorkDetails>
            </BioSection>
            <WorkTasks>
            <UnorderedList>
                    <ListItem>
                        Helped the design team working on client tickets
                    </ListItem>
                </UnorderedList>
                </WorkTasks>
            <Divider/>
     
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
