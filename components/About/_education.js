import { Box, Heading, VStack, StackDivider, Text, useColorModeValue } from "@chakra-ui/react"

const Education = ({ padding, heading, edOneHead, edOneDesc, edTwoHead, edTwoDesc, edThreeHead, edThreeDesc }) => {

    const EduHead = ({ children, ...props }) => {
        return (
            <Heading
                as="h3" 
                fontSize='xl' 
                textDecoration="underline"
                textDecorationColor={useColorModeValue('fujimurasaki', 'shion')}
                textDecorationThickness={2}
                textUnderlineOffset={6}
                mb={2}
                {...props}
            >
                {children}    
            </Heading>
        )
    }

    return (
        <Box p={padding}>
            <Heading as="h2" pb="1rem">
                {heading}
            </Heading>

            <VStack
                // divider={<StackDivider borderColor={useColorModeValue('fujimurasaki', 'shion')} />}
                spacing={6}
                align='stretch'
            >
                <Box>
                    <EduHead>{edOneHead}</EduHead>
                    <Text fontSize='md'>
                        &emsp;{edOneDesc}
                    </Text>
                </Box>

                <Box>
                    <EduHead>{edTwoHead}</EduHead>
                    <Text fontSize='md'>
                        &emsp;{edTwoDesc}
                    </Text>
                </Box>
                <Box>
                    <EduHead>{edThreeHead}</EduHead>
                    <Text>
                        &emsp;{edThreeDesc}
                    </Text>
                </Box>
            </VStack>
        </Box>
    )
}

export default Education