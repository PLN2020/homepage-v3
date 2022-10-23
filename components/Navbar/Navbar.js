import { Box, Flex, Text } from "@chakra-ui/react"
import { FaFlickr, FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import NextLink from 'next/link'
import ThemeToggleButton from "./_theme-toggle-button"

function Navbar() {
    return (
        <Flex
            as="nav"
            w="100%"
            borderBottom="1px solid rgb(255, 255, 255, 0.1)"
        >
            {/* Logo Section */}
            <Box 
                padding="3rem 2rem"
            >
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
            <Flex 
                padding="3rem 2rem" 
                gap="1rem"
                borderLeft="1px solid rgb(255, 255, 255, 0.1)"
            >
                <NextLink href="#" passHref>
                    About
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
            </Flex>

            {/* Social Section */}
            <Flex 
                padding="3rem 2rem" 
                gap="1rem"
                borderLeft="1px solid rgb(255, 255, 255, 0.1)"    
            >
                <NextLink href="#" passHref>
                    <FaGithub />
                </NextLink>
                <NextLink href="#" passHref>
                    <FaLinkedin />
                </NextLink>
                <NextLink href="#" passHref>
                    <FaFlickr />
                </NextLink>
            </Flex>

            {/* Buttons Sections */}
            <Flex 
                padding="3rem 2rem"
                gap="1rem"
                borderLeft="1px solid rgb(255, 255, 255, 0.1)"
            >
                <ThemeToggleButton />
            </Flex>
        </Flex>
    )
    }

export default Navbar