import { Flex, useColorModeValue, Link } from "@chakra-ui/react"
import { FaFlickr, FaGithub, FaLinkedin } from 'react-icons/fa'
import NextLink from 'next/link'
import ThemeToggleButton from "./_theme-toggle-button"
import LinkItem from "./_link-item"
import Logo from "./_logo"
import ToggleLocaleButton from "./_toggle-locale-button"
import useTranslation from 'next-translate/useTranslation'

const Navbar = () => {
    let { t } = useTranslation()

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
            </Flex>

            {/* Link Section */}
            <Flex
                p="3rem 2rem"
                gap="1rem"
                borderLeft="1px solid"
                borderLeftColor={useColorModeValue('fujimurasaki', 'shion')}
                align="center"
                justify="center"
                boxSizing="border-box"
                w="calc(100% / 3)"
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
                p="3rem 2rem"
                gap="1.5rem"
                borderLeft="1px solid"
                borderLeftColor={useColorModeValue('fujimurasaki', 'shion')}
                align="center"
                justify="center"
                boxSizing="border-box"
                w="calc(100% / 6)"
                fontSize="2.5rem"
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
                gap="1rem"
                borderLeft="1px solid"
                borderLeftColor={useColorModeValue('fujimurasaki', 'shion')}
                align="center"
                justify="center"
                boxSizing="border-box"
                w="calc(100% / 6)"
            >
                <ToggleLocaleButton />
                <ThemeToggleButton />
            </Flex>
        </Flex>
    )
    }

export default Navbar