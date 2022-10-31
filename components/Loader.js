import { Box, Center, Progress, Text } from '@chakra-ui/react'

const Loader = () => {
    return (
        <Box
            h={{base: "auto", md: "calc(100vh - 160px)"}}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Text mb="1rem" fontFamily="Poppins">Loading...</Text>
            <Progress size="xs" isIndeterminate w="40%" colorScheme="purple" />            
        </Box>
    )
}

export default Loader