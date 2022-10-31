import { Box, Center, Progress } from '@chakra-ui/react'

const Loader = () => {
    return (
        <Box>
            <Center>
                Loading...
            </Center>
            <Progress size="xs" isIndeterminate />
        </Box>
    )
}

export default Loader