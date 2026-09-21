import Link from 'next/link'
import { Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 20px;
    display: inline-flex;
    
    align-items: flex-end;
    height: 36px;
    line-height: 20px;
    padding: 10px;
    margin-top: 4px;
`

  

const Logo = () => {
    const pantherIdle = `/images/panther_navbar_1.gif`
    const pantherAttack = `/images/panther_navbar_2.gif`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <img 
                    src={pantherIdle} 
                    width={96} 
                    height={48} 
                    alt="logo" 
                    onMouseOver={e => (e.currentTarget.src = pantherAttack)}
                    onMouseOut={e => (e.currentTarget.src = pantherIdle)}
                    />
                    <Text color={useColorModeValue('gray.800','whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight="bold" ml={3} whiteSpace="nowrap" >
                        Home
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo