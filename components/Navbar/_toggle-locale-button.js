import { Menu, MenuButton, MenuItem, MenuList, Button, Link, Center } from "@chakra-ui/react"
import { useRouter } from "next/router"
import NextLink from "next/link"

const ToggleLocaleButton = () => {
    const router = useRouter()
    const language = 
        router.locale === "en"
        ? "EN"
        : router.locale === "fr"
        ? "FR"
        : router.locale === "ja"
        ? "JP"
        : ""

    return (
        <Menu>
            <MenuButton as={Button}>
                <Center>{language}</Center>
            </MenuButton>
            
            <MenuList>
                {router.locales.map((locale) => (
                    <NextLink href={router.asPath} locale={locale} key={locale} passHref>
                        <MenuItem as={Link}>
                            {locale === "en" 
                            ? "English"
                            : locale === "fr"
                            ? "Français"
                            : locale === "ja"
                            ? "日本語"
                            : "" }
                        </MenuItem>
                    </NextLink>
                ))}
            </MenuList>
        </Menu>
    )
}

export default ToggleLocaleButton