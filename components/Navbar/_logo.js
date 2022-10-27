import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FaLaptopCode } from 'react-icons/fa'

const Logo = () => {
    return (
        <Link href="/" scroll={true}>
            <Box
                fontSize= {{ base: '1.4em', md: '35px' }}
                display="inline-flex"
                alignItems="center"
                transition="all 0.2s ease-out"
                _hover={{
                    cursor: "pointer",
                    // textColor: "murasaki",
                    transform: 'scale(1.04)'
                }}
                _active={{
                    transform: 'scale(1.04) translateY(0.2rem)'
                }}
            >
                <FaLaptopCode />
                <Text
                    fontWeight="bold"
                    ml={2}
                    fontFamily="Poppins"
                >
                    plnguyen
                </Text>
            </Box>
        </Link>
    )
}

export default Logo