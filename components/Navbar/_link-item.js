import { withRouter } from "next/router"
import NextLink from 'next/link'
import { Link } from "@chakra-ui/react"

const LinkItem = ({ router, href, children }) => {
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

    return (
        <NextLink href={href} passHref onClick={handleClick}>
            <Link
                textDecoration='none'
                m='0'
                p='0'
                fontWeight={isCurrentPath ? 'bold' : 'normal'}
                color={isCurrentPath ? 'white' : 'black'}
            >
                {children}
            </Link>
        </NextLink>
    )
}

export default withRouter(LinkItem)