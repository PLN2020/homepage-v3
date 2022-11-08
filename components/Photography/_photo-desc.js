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
            <Box 
                h="6rem" 
                w="6rem" 
                border="1px solid" 
                borderRadius="none"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Heading as="h2">{number}</Heading>
            </Box>

            <Box>
                <Heading as="h2">
                    {city}
                </Heading>
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <FaCamera />
                    <Text ml="5px">{camera}</Text>
                </Box>
                <Badge 
                    colorScheme="purple" 
                    fontSize="1em" 
                    borderRadius="full" 
                    px="2"
                >
                    {year}
                </Badge>
            </Box>
        </HStack>
    )
}

export default PhotoDesc