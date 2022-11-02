import { Box, Heading, Text, Button, Link, useColorModeValue, Divider } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import { FaCameraRetro } from "react-icons/fa"

const Profile = ({ padding, heading, text, jlpt, jlptButton, photoButton }) => {
    return (
        <Box p={padding}>
            <Heading as="h2" pb="1rem">
                {heading}
            </Heading>
            <Text textAlign="left" fontSize={{ base: "md", lg: "sm" }} pb="1rem">
                {text}
            </Text>
            <NextLink href="/photography" passHref scroll={false}>
                <Button 
                    borderRadius={0} 
                    rightIcon={<FaCameraRetro />} 
                    border="1px solid"
                    borderColor={useColorModeValue('sumi', 'shironeri')}
                    variant="outline"
                >
                    {photoButton}
                </Button>
            </NextLink>

            <Box pt="1.5rem" pb="1.5rem">
                <Divider borderColor={useColorModeValue('fujimurasaki', 'shion')} opacity={1}/>
            </Box>
            
            <Text pb="1rem" fontSize={{ base: "md", lg: "sm" }}>
                {jlpt}
            </Text>
            <Button 
                variant="outline" 
                borderRadius={0} 
                rightIcon={<ExternalLinkIcon />}
                border="1px solid"
                borderColor={useColorModeValue('sumi', 'shironeri')}
            >
                <Link
                    href="https://www.jlpt.jp/e/about/levelsummary.html" 
                    target="_blank"
                >
                    {jlptButton}
                </Link>
            </Button>
        </Box>
    )
}

export default Profile