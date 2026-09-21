
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
    MenuButton,
    MenuItem,
    MenuList,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import  ThemeToggleButton  from './theme-toggle-button'

const links = [
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
]

const isActive = (path, href) => path === href || path.startsWith(href + '/')

// Button-like link: no underline, background on hover.
const LinkItem = ({ href, path, children }) => {
    const active = isActive(path, href)
    const hoverBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')

    return (
        <NextLink href={href} passHref>
            <Link
            px={3}
            py={2}
            borderRadius="md"
            fontSize="lg"
            bg={active ? 'teal.300' : undefined}
            color={active ? '#202023' : inactiveColor}
            _hover={{ textDecoration: 'none', bg: active ? 'teal.300' : hoverBg }} >
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
        align="center"
        alignItems="center"
        justify="space-between">
            <Flex centeralign="center" mr={5} align="center">
                <Heading alignItems="flex-end" as="h1" size="lg" letterSpacing={'tight'}>
                    <Logo />
                </Heading>
            </Flex>
            <Stack
            direction="row"
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            flexGrow={1} >
                {links.map(l => (
                    <LinkItem key={l.href} href={l.href} path={path}>
                        {l.label}
                    </LinkItem>
                ))}
            </Stack>
            <Flex alignItems="center" ml={{ base: 'auto', md: 0 }}>
                <ThemeToggleButton />
                <Box ml={2} display={{ base: 'block', md: 'none' }}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" size="lg" aria-label="Menu" />
                        <MenuList>
                            {links.map(l => (
                                <NextLink key={l.href} href={l.href} passHref>
                                    <MenuItem as={Link} _hover={{ textDecoration: 'none' }} fontWeight={isActive(path, l.href) ? 'bold' : 'normal'}>
                                        {l.label}
                                    </MenuItem>
                                </NextLink>
                            ))}
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Container>
    </Box>
  )
}

export default Navbar
