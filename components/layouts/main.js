import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer"

const Main = ({ children }) => {
    return (
        <Box as="main">
            <Head>
                <title>plnguyen</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Patrick-Lam Nguyen's homepage. Full Stack Wev Developer based in Montreal." />
                <meta name="author" content="Patrick-Lam Nguyen" />
                <link rel="icon" href="/coding.ico" />
                <meta property="og:site_name" content="plnguyen" />
                <meta name="og:site_title" content="Patrick-Lam Nguyen's homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://res.cloudinary.com/ditoikfqn/image/upload/v1667780360/NextJS-Portfolio/homepage-v3_ju7vrn.jpg" />
            </Head>

            <Navbar />
            { children }
            <Footer />
        </Box>
    )
}

export default Main