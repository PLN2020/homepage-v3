import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons"
import { IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Flex, useColorModeValue } from "@chakra-ui/react"
import useTranslation from 'next-translate/useTranslation'
import NextLink from 'next/link'
import { FaFlickr, FaGithub, FaLinkedin } from "react-icons/fa"

const MobileMenu = () => {
    let { t } = useTranslation()

    return (
        <Menu>
            <MenuButton 
                as={IconButton}
                aria-label='Menu'
                icon={<HamburgerIcon />}
                variant='outline'
                borderColor={useColorModeValue('sumi', 'shironeri')}
                borderRadius="none"
            />

            <MenuList 
                fontFamily="Poppins"
                borderRadius="none" 
                bg={useColorModeValue('shironeri', 'sumi')}
                borderColor={useColorModeValue('sumi', 'shironeri')}
            >
                <NextLink href="/about" passHref>
                    <MenuItem>
                        <Link>
                            {t('common:section-one')}
                        </Link>
                    </MenuItem>
                </NextLink>
                
                <NextLink href="/projects" passHref>
                    <MenuItem>
                        <Link>
                            {t('common:section-two')}
                        </Link>                    
                    </MenuItem>
                </NextLink>
                
                <NextLink href="/photography" passHref>
                    <MenuItem>
                        <Link>
                            {t('common:section-three')}
                        </Link>
                    </MenuItem>
                </NextLink>

                <NextLink href="/contact" passHref>
                    <MenuItem>
                        <Link>
                            {t('common:section-four')}
                        </Link>
                    </MenuItem>        
                </NextLink>

                <MenuItem icon={<ExternalLinkIcon />}>
                    <Link href="https://github.com/PLN2020" target="_blank">
                        <Flex align="center">
                            GitHub&nbsp;
                            <FaGithub />
                        </Flex>
                    </Link>
                </MenuItem>

                <MenuItem icon={<ExternalLinkIcon />}>
                    <Link href="https://www.linkedin.com/in/plnguyen2021" target="_blank">
                        <Flex align="center">
                            LinkedIn&nbsp;
                            <FaLinkedin />
                        </Flex>
                    </Link>
                </MenuItem>

                <MenuItem icon={<ExternalLinkIcon />}>
                    <Link href="https://flic.kr/ps/Xn7sG" target="_blank">
                        <Flex align="center">
                            Flickr&nbsp;
                            <FaFlickr />
                        </Flex>
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MobileMenu