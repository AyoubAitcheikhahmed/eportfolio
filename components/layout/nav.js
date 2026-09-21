
import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import  ThemeToggleButton  from './theme-toggle-button'

const LinkItem = ({ href,path , children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200','whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link
            p={2}
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
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none', md: 'flex'}}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4,md: 0}} >

                <LinkItem href="/posts" path={path}>
                    Posts
                </LinkItem>
                <LinkItem href="/projects"  >
                    Projects
                </LinkItem>
            </Stack>
            <Box flex={1} align="center" display={{ base: 'none', md: 'inline-block' }} mt={{ base: 4,md: 0}}>
                <ThemeToggleButton />
                </Box>
                <Box ml={2} isplay={{ base: 'none', md: 'inline-block' }}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                        <MenuList>
                            <NextLink href="/projects" passHref>
                                <MenuItem as={Link}>
                                    Projects
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/" passHref>
                                <MenuItem as={Link}>
                                    Skills
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/" passHref>
                                <MenuItem as={Link}>
                                    Hobbies
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/stories" passHref>
                                <MenuItem as={Link}>
                                    Contact
                                </MenuItem>
                            </NextLink>
                        </MenuList>

                    </Menu>
                </Box>

        </Container>
    </Box>
  )
}

export default Navbar
