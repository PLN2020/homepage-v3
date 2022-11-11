import { Box, Heading, Text, Button, Link, useColorModeValue, Divider, HStack, VStack } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import { FaCameraRetro, FaDatabase } from "react-icons/fa"
import ButtonLink from "../ButtonLink"

const Profile = ({ padding, heading, text, jlpt, jlptButton, photoButton, projectsButton }) => {
    return (
        <Box p={padding}>
            <Heading as="h2" pb="1rem">
                {heading}
            </Heading>
            <Text textAlign="left" fontSize={{ base: "md", lg: "md" }} pb="1rem">
                {text}
            </Text>

            <VStack gap={2} align="start">
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

                <NextLink href="/projects" passHref scroll={false}>
                    <Button 
                        borderRadius={0} 
                        rightIcon={<FaDatabase />} 
                        border="1px solid"
                        borderColor={useColorModeValue('sumi', 'shironeri')}
                        variant="outline"
                    >
                        {projectsButton}
                    </Button>
                </NextLink>
            </VStack>

            <Box pt="1.5rem" pb="1.5rem">
                <Divider borderColor={useColorModeValue('fujimurasaki', 'shion')} opacity={1}/>
            </Box>
            
            <Text pb="1rem" fontSize={{ base: "md", lg: "md" }}>
                {jlpt}
            </Text>
            
            <ButtonLink 
                icon={<ExternalLinkIcon />}
                href="https://www.jlpt.jp/e/about/levelsummary.html"
                text={jlptButton}
            />
        </Box>
    )
}

export default Profile