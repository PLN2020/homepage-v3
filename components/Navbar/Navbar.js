import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { FaFlickr, FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import NextLink from 'next/link'
import ThemeToggleButton from "./_theme-toggle-button"

function Navbar() {

    const NavSection = ({ children }) => {
        return (
            <Flex
                p="3rem 2rem"
                gap="1rem"
                borderLeft="1px solid"
                borderLeftColor={useColorModeValue('fujimurasaki', 'shikon')}
                align="center"
                boxSizing="border-box"
            >
                {children}
            </Flex>
        )
    }

    return (
        <Flex
            as="nav"
            w="100%"
            borderBottom="1px solid"
            borderBottomColor={useColorModeValue('fujimurasaki', 'shikon')}
        >
            {/* Logo Section */}
            <Flex 
                padding="3rem 2rem"
                align="center"
                w="calc(100% / 3)"
                boxSizing="border-box"
            >
                <NextLink href="#" passHref>
                    <Box
                        display='inline-flex'
                        alignItems='center'
                    >
                        <FaLaptopCode />
                        <Text>
                            &nbsp;plnguyen
                        </Text>
                    </Box>
                </NextLink>
            </Flex>

            {/* Link Section */}
            <Flex
                p="3rem 2rem"
                gap="2rem"
                borderLeft="1px solid"
                borderLeftColor={useColorModeValue('fujimurasaki', 'shikon')}
                align="center"
                justify="center"
                boxSizing="border-box"
                w="calc(100% / 3)"
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
                p="3rem 2rem"
                gap="1.5rem"
                borderLeft="1px solid"
                borderLeftColor={useColorModeValue('fujimurasaki', 'shikon')}
                align="center"
                justify="center"
                boxSizing="border-box"
                w="calc(100% / 6)"
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
                p="3rem 2rem"
                gap="1rem"
                borderLeft="1px solid"
                borderLeftColor={useColorModeValue('fujimurasaki', 'shikon')}
                align="center"
                justify="center"
                boxSizing="border-box"
                w="calc(100% / 6)"
            >
                <ThemeToggleButton />
            </Flex>
        </Flex>
    )
    }

export default Navbar