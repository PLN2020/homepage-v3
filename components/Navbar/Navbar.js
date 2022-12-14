import { Flex, Link, Box } from "@chakra-ui/react"
import { FaFlickr, FaGithub, FaLinkedin } from 'react-icons/fa'
import ThemeToggleButton from "./_theme-toggle-button"
import LinkItem from "./_link-item"
import Logo from "./_logo"
import ToggleLocaleButton from "./_toggle-locale-button"
import useTranslation from 'next-translate/useTranslation'
import MobileMenu from "./_mobile-menu"

const Navbar = () => {
    let { t } = useTranslation()

    return (
        <Flex
            as="nav"
            w="100%"
            height="100px"
            borderBottom="1px solid"
        >
            {/* Logo Section */}
            <Flex 
                padding="3rem 2rem"
                align="center"
                w={{ base: "50%", xl: "calc(100vw / 3)" }}
                boxSizing="border-box"
            >
                <Logo />
            </Flex>

            {/* Link Section */}
            <Flex
                display={{ base: "none", xl: "flex"}}
                px="3rem"
                borderLeft="1px solid"
                alignItems="center"
                justifyContent="space-around"
                boxSizing="border-box"
                w="calc(100vw / 3)"
            >
                <LinkItem href="/about">
                    {t('common:section-one')}
                </LinkItem>
                <LinkItem href="/projects">
                    {t('common:section-two')}
                </LinkItem>
                <LinkItem href="/photography">
                    {t('common:section-three')}
                </LinkItem>
                <LinkItem href="/contact">
                    {t('common:section-four')}
                </LinkItem>
            </Flex>

            {/* Social Section */}
            <Flex
                display={{ base: "none", xl: "flex"}}
                p="3rem 2rem"
                gap="1.5rem"
                borderLeft="1px solid"
                align="center"
                justify="center"
                boxSizing="border-box"
                w="calc(100vw / 6)"
                fontSize="1.5rem"
            >
                <Link
                    href="https://github.com/PLN2020"
                    target="_blank"
                    transition="all ease-in 200ms"
                    _hover={{
                        color: "fujimurasaki"
                    }}
                >
                    <FaGithub />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/plnguyen2021"
                    target="_blank"
                    transition="all ease-in 200ms"
                    _hover={{
                        color: "fujimurasaki"
                    }}
                >
                    <FaLinkedin />
                </Link>
                <Link
                    href="https://flic.kr/ps/Xn7sG"
                    target="_blank"
                    transition="all ease-in 200ms"
                    _hover={{
                        color: "fujimurasaki"
                    }}
                >
                    <FaFlickr />
                </Link>
            </Flex>

            {/* Buttons Sections */}
            <Flex
                p="3rem 2rem"
                gap={{ base: "0.5rem", xl: "1rem"}}
                borderLeft={{ base: "none", md: "1px solid" }}
                align="center"
                justify="center"
                boxSizing="border-box"
                w={{ base: "50%", xl: "calc(100vw / 6)" }}
            >
                <Box zIndex={5}><ToggleLocaleButton /></Box>
                <ThemeToggleButton />
                <Box display={{ base: 'inline-block', xl: 'none' }} zIndex={5}>
                    <MobileMenu />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Navbar