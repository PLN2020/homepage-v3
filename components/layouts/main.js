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
                <meta name="description" content="Patrick-Lam Nguyen's homepage." />
                <meta name="author" content="Patrick-Lam Nguyen" />
                <link rel="icon" href="/coding.ico" />
                <meta property="og:site_name" content="plnguyen" />
                <meta name="og:site_title" content="plnguyen.dev" />
                <meta name="og:title" content="plnguyen.dev" />
                <meta property="og:url" content="https://plnguyen.dev" />
                <meta property="og:image" content="https://res.cloudinary.com/ditoikfqn/image/upload/v1667971166/NextJS-Portfolio/og_image_v2_ohj71l.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Patrick-Lam Nguyen's homepage. Full Stack Wev Developer based in Montreal." />
            </Head>

            <Navbar />
            { children }
            <Footer />
        </Box>
    )
}

export default Main