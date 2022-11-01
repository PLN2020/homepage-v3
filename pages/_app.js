import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import theme from "../lib/theme"
import Router from "next/router"
import Loader from "../components/Loader"
import { useState } from "react"

import '@fontsource/noto-sans/400.css'
import '@fontsource/poppins/700.css'
import '@fontsource/noto-serif-jp/900.css'
import '@fontsource/shippori-mincho/800.css'

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(false)

    Router.events.on('routeChangeStart', (url)=>{
        console.log('Loading...')
        setLoading(true)
    })
    Router.events.on('routeChangeComplete', (url)=>{
        console.log('Loading complete')
        setLoading(false)
    })

    return (
        <ChakraProvider theme={theme}>
            <Layout>
                { loading ? <Loader /> : <Component {...pageProps} /> }
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp