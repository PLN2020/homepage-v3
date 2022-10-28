import { Box, Center, Text } from '@chakra-ui/react'

function Footer() {
    return (
        <Center
            as="footer"
            h="60px"
            borderTop="1px solid #8F77B5"
        >
            {/* {new Date().getFullYear()}  */}
            <Text opacity={0.4} fontSize="sm">
                2022 &copy; Patrick-Lam Nguyen
            </Text>
        </Center>
    )
}

export default Footer