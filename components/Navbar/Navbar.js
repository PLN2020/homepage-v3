import { Box, Flex, Text, useColorModeValue, Link } from "@chakra-ui/react"
import { FaFlickr, FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import NextLink from 'next/link'
import ThemeToggleButton from "./_theme-toggle-button"
import LinkItem from "./_link-item"
import Logo from "./_logo"

// const LinkItem = ({ href, path, target, children, ...props }) => {
//     const active = path === href
//     const inactiveColor = useColorModeValue('fujimurasaki', 'shikon')
//     return (
//         <NextLink href={href} passHref>
//             <Link
//                 bg={active ? 'white' : undefined}
//                 color={active ? 'white' : inactiveColor}
//                 target={target}
//                 {...props}
//             >
//                 {children}
//             </Link>
//         </NextLink>
//     )
// }

const Navbar = props => {

    const { path } = props

    return (
        <Flex
            as="nav"
            w="100%"
            borderBottom="1px solid"
            borderBottomColor={useColorModeValue('fujimurasaki', 'shion')}
        >
            {/* Logo Section */}
            <Flex 
                padding="3rem 2rem"
                align="center"
                w="calc(100% / 3)"
                boxSizing="border-box"
            >
                <Logo />
                {/* <NextLink href="/" passHref>
                    <Box
                        display='inline-flex'
                        alignItems='center'
                    >
                        <FaLaptopCode />
                        <Text>
                            &nbsp;plnguyen
                        </Text>
                    </Box>
                </NextLink> */}
            </Flex>

            {/* Link Section */}
            <Flex
                p="3rem 2rem"
                gap="1.5rem"
                borderLeft="1px solid"
                borderLeftColor={useColorModeValue('fujimurasaki', 'shion')}
                align="center"
                justify="center"
                boxSizing="border-box"
                w="calc(100% / 3)"
            >
                <LinkItem href="/about">
                    ABOUT
                </LinkItem>
                <LinkItem href="/projects">
                    PROJECTS
                </LinkItem>
                <LinkItem href="/photography">
                    PHOTOGRAPHY
                </LinkItem>
                <LinkItem href="/contact">
                    CONTACT
                </LinkItem>
            </Flex>

            {/* Social Section */}
            <Flex
                p="3rem 2rem"
                gap="1.5rem"
                borderLeft="1px solid"
                borderLeftColor={useColorModeValue('fujimurasaki', 'shion')}
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
                borderLeftColor={useColorModeValue('fujimurasaki', 'shion')}
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