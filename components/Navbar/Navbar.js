import { Box, Text } from "@chakra-ui/react"
import { FaLaptopCode } from 'react-icons/fa'
import Link from 'next/link'

function Navbar() {
    return (
        <Box
            as="nav"
        >
            {/* Logo Section */}
            <Box>
                <Link href="/">
                    <Box
                        display='inline-flex'
                        alignItems='center'
                    >
                        <FaLaptopCode />
                        <Text>
                            plnguyen
                        </Text>
                    </Box>
                </Link>
            </Box>

            {/* Link Section */}
            <Box>

            </Box>

            {/* Social Section */}
            <Box>

            </Box>

            {/* Buttons Sections */}
            <Box>

            </Box>
        </Box>
    )
    }

export default Navbar