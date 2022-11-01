import { Box, Heading, Text } from "@chakra-ui/react"

const Profile = ({ padding, heading, text }) => {
    return (
        <Box p={padding}>
            <Heading as="h2" pb="1rem">
                {heading}
            </Heading>
            <Text textAlign="left" fontSize="sm">
                {text}
            </Text>
        </Box>
    )
}

export default Profile