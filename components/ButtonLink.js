import { Button, Link, useColorModeValue } from "@chakra-ui/react"

const ButtonLink = ({ icon, href, text }) => {
    return (
        <Button 
                variant="outline" 
                borderRadius={0} 
                rightIcon={icon}
                border="1px solid"
                borderColor={useColorModeValue('sumi', 'shironeri')}
            >
                <Link
                    href={href}
                    target="_blank"
                >
                    {text}
                </Link>
            </Button>
    )
}

export default ButtonLink