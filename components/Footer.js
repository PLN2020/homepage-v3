import { Center, Text, useColorModeValue } from '@chakra-ui/react'

function Footer() {
    return (
        <Center
            as="footer"
            h="40px"
            borderTop="1px solid"
        >
            {/* {new Date().getFullYear()}  */}
            <Text opacity={useColorModeValue('0.8', '0.4')} fontSize="xs">
                &copy; 2022 Patrick-Lam Nguyen
            </Text>
        </Center>
    )
}

export default Footer