import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'



export const ProjectGridItem = ({children, id, title,thumbnail}) => (
    <Box w="100%" align="center">
        <NextLink href={`/projects/${id}`}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder='blur'/>
                    <LinkOverlay href={`/projects/${id}`} >
                        <Text mt={3} fontSize={20}>
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14} mb={5}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

