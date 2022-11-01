import { Box, Heading, VStack, StackDivider, Text, Button, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const Education = ({ padding, heading, edOneHead, edOneDesc, edTwoHead, edTwoDesc, edThreeHead, edThreeDesc, jlpt,jlptButton }) => {
    return (
        <Box p={padding}>
            <Heading as="h2" pb="1rem">
                {heading}
            </Heading>
            <VStack
                divider={<StackDivider borderColor='shion' />}
                spacing={3}
                align='stretch'
            >
                <Box>
                    <Heading as="h3" fontSize="md" pb="4px">
                        {edOneHead}
                    </Heading>
                    <Text fontSize="sm">
                        {edOneDesc}
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" fontSize="md" pb="4px">
                        {edTwoHead}
                    </Heading>
                    <Text fontSize="sm">
                        {edTwoDesc}
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" fontSize="md" pb="4px">
                        {edThreeHead}
                    </Heading>
                    <Text fontSize="sm">
                        {edThreeDesc}
                    </Text>
                </Box>
            </VStack>

            <Text pt="1rem" pb="6px" fontSize="sm">
                {jlpt}
            </Text>
            <Button variant="outline" borderRadius={0} fontSize="sm" rightIcon={<ExternalLinkIcon />}>
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

export default Education