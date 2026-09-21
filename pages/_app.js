import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layout/layout"
import theme from '../lib/theme'
import { AnimatePresence } from "framer-motion"
import 'highlight.js/styles/github-dark.css'

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )

}

export default Website