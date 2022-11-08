import { Badge, Box, Heading, HStack, StackDivider, Text, useColorModeValue } from "@chakra-ui/react"
import { FaCamera } from "react-icons/fa"

const PhotoDesc = ({ city, year, camera, number, width, padding }) => {
    return (
        <HStack 
            spacing="1rem" 
            divider={<StackDivider borderColor={useColorModeValue('fujimurasaki', 'shion')}/>}
            p={padding}
            w={width}
            display="flex"
            justifyContent="center"
        >
            <Box textAlign="right">
                <Heading as="h2" fontSize={{ base: "4xl", md: "7xl", lg: "4xl" }}>
                    {city}
                </Heading>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                    fontSize={{ base: "md", md: "24px", lg: "md" }}
                >
                    <FaCamera />
                    <Text 
                        ml="5px"
                    >
                        {camera}
                    </Text>
                </Box>
                <Badge 
                    colorScheme="purple" 
                    fontSize={{ base: "12px", md: "20px", lg: "1em" }}
                    borderRadius="full" 
                    px="2"
                >
                    {year}
                </Badge>
            </Box>

            <Box 
                h={{ base: "6rem", md: "10rem", lg: "6rem" }}
                w={{ base: "6rem", md: "10rem", lg: "6rem" }}
                border="1px solid" 
                borderRadius="none"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Heading 
                    as="h2"
                    fontSize={{ base: "4xl", md: "7xl", lg: "4xl" }}
                >
                    {number}
                </Heading>
            </Box>
        </HStack>
    )
}

export default PhotoDesc