import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layout"
import theme from "../lib/theme"

import '@fontsource/noto-sans/400.css'
import '@fontsource/shippori-mincho/800.css'
import '@fontsource/poppins/700.css'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp