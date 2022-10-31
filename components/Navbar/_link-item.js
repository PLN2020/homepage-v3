import { withRouter } from "next/router"
import NextLink from 'next/link'
import { Link, useColorModeValue } from "@chakra-ui/react"

const LinkItem = ({ router, href, children, ...props }) => {
    (function prefetchPages() {
        if (typeof window !== "undefined") {
            router.prefetch(router.pathname)
        }
    })()

    const handleClick = event => {
        event.preventDefault();
        router.push(href)
    }

    const isCurrentPath = router.pathname === href || router.asPath === href;
    const inactiveColor = useColorModeValue('gray.400', 'whiteAlpha.400')
    const activeColor = useColorModeValue('fujimurasaki', 'shion')

    return (
        <NextLink href={href} passHref>
            <Link
                onClick={handleClick}
                textDecoration='none'
                m='0'
                p='0'
                fontWeight={isCurrentPath ? 'bold' : 'normal'}
                color={isCurrentPath ? activeColor : inactiveColor}
                fontFamily="Poppins"
                transition="all 0.2s ease-out"
                _hover={{
                    color: "shion"
                }}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

export default withRouter(LinkItem)