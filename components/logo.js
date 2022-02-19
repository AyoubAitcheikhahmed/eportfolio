import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    
    &:hover img {
        transform: rotate(12deg);
    }
`

const Logo = () => {
    const logo = `/images/pixel_logo.gif`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={logo} width={22} height={40} alt="logo" />
                    <Text color={useColorModeValue('gray.800','whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight="bold" ml={3}>
                        Ayoub Aitcheikhahmed
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo