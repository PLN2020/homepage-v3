import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width-device-width, initial-scale=1" />
                <meta name="description" content="Patrick-Lam Nguyen's homepage" />
                <meta name="author" content="Patrick-Lam Nguyen" />
                {/* Icon */}
            </Head>

            <Navbar />
            { children }
            <Footer />
        </Box>
    )
}

export default Layout