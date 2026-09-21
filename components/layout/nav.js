
import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue
} from '@chakra-ui/react'
import  ThemeToggleButton  from './theme-toggle-button'

const LinkItem = ({ href,path , children}) => {
    const active = path === href || path.startsWith(href + '/')
    const inactiveColor = useColorModeValue('gray200','whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link
            p={2}
            fontSize="lg"
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor} >
                {children}
            </Link>

        </NextLink>
    )
}


const Navbar = props => {
    const { path } = props

  return (
    <Box 
    position="fixed" 
    as="nav" w="100%" 
    bg={useColorModeValue('#ffffffff40','#20202380')} 
    style={{ backdropFilter: 'blur(10px'}}
    zIndex={1}
    {...props} >
        <Container
        boxSizing="inherit"
        display="flex" 
        flexWrap="wrap"
        p={2} 
        maxW="container.md" 
        wrap="wrap" 
        align="center"
        alignItems="center"
        justify="space-between">
            <Flex centeralign="center" mr={5} mt={{ base: 4,md: 0}} align>
                <Heading alignItems="flex-end" as="h1" size="lg" letterSpacing={'tight'}>
                    <Logo />
                </Heading>
            </Flex>
            <Stack
            direction="row"
            alignItems="center"
            flexGrow={1}
            flexWrap="wrap"
            mt={{ base: 4,md: 0}} >
                <LinkItem href="/blog" path={path}>
                    Blog
                </LinkItem>
                <LinkItem href="/projects" path={path}>
                    Projects
                </LinkItem>
                <LinkItem href="/contact" path={path}>
                    Contact
                </LinkItem>
            </Stack>
            <Box mt={{ base: 4,md: 0}}>
                <ThemeToggleButton />
            </Box>
        </Container>
    </Box>
  )
}

export default Navbar
