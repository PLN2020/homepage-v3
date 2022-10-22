import { Box, Text } from "@chakra-ui/react"
import { FaFlickr, FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import NextLink from 'next/link'
import ThemeToggleButton from "./_theme-toggle-button"

function Navbar() {
    return (
        <Box
            as="nav"
        >
            {/* Logo Section */}
            <Box>
                <NextLink href="#" passHref>
                    <Box
                        display='inline-flex'
                        alignItems='center'
                    >
                        <FaLaptopCode />
                        <Text>
                            plnguyen
                        </Text>
                    </Box>
                </NextLink>
            </Box>

            {/* Link Section */}
            <Box>
                <NextLink href="#" passHref>
                    About
                </NextLink>
                <NextLink href="#" passHref>
                    Toolkit
                </NextLink>
                <NextLink href="#" passHref>
                    Projects
                </NextLink>
                <NextLink href="#" passHref>
                    Photography
                </NextLink>
                <NextLink href="#" passHref>
                    Contact
                </NextLink>
            </Box>

            {/* Social Section */}
            <Box>
                <NextLink href="#" passHref>
                    <FaGithub />
                </NextLink>
                <NextLink href="#" passHref>
                    <FaLinkedin />
                </NextLink>
                <NextLink href="#" passHref>
                    <FaFlickr />
                </NextLink>
            </Box>

            {/* Buttons Sections */}
            <Box>
                <ThemeToggleButton />
            </Box>
        </Box>
    )
    }

export default Navbar