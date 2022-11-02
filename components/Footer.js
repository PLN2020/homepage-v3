import { Center, Text } from '@chakra-ui/react'

function Footer() {
    return (
        <Center
            as="footer"
            h="40px"
            borderTop="1px solid"
        >
            {/* {new Date().getFullYear()}  */}
            <Text opacity={0.4} fontSize="sm">
                &copy; 2022 Patrick-Lam Nguyen
            </Text>
        </Center>
    )
}

export default Footer