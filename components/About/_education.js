import { Box, Heading, VStack, StackDivider, Text, useColorModeValue } from "@chakra-ui/react"

const Education = ({ padding, heading, edOneHead, edOneDesc, edTwoHead, edTwoDesc, edThreeHead, edThreeDesc, jlpt,jlptButton }) => {
    return (
        <Box p={padding}>
            <Heading as="h2" pb="1rem">
                {heading}
            </Heading>
            <VStack
                divider={<StackDivider borderColor={useColorModeValue('fujimurasaki', 'shion')} />}
                spacing={5}
                align='stretch'
            >
                <Box>
                    <Heading as="h3" fontSize={{ base: "lg", lg: "sm" }} pb="4px">
                        {edOneHead}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "sm" }}>
                        {edOneDesc}
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" fontSize={{ base: "lg", lg: "sm" }} pb="4px">
                        {edTwoHead}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "sm" }}>
                        {edTwoDesc}
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" fontSize={{ base: "lg", lg: "sm" }} pb="4px">
                        {edThreeHead}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "sm" }}>
                        {edThreeDesc}
                    </Text>
                </Box>
            </VStack>
        </Box>
    )
}

export default Education