import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer"

const Main = ({ children }) => {
    return (
        <Box as="main">
            <Head>
                <title>plnguyen</title>
                <meta name="viewport" content="width-device-width, initial-scale=1" />
                <meta name="description" content="Patrick-Lam Nguyen's homepage" />
                <meta name="author" content="Patrick-Lam Nguyen" />
                {/* Icon */}
                <link rel="icon" href="/coding.ico" />
            </Head>

            <Navbar />
            { children }
            <Footer />
        </Box>
    )
}

export default Main