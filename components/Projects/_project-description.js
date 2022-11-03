import { Box, Heading, Badge, Text, Tooltip, HStack } from "@chakra-ui/react"
import { SiChakraui } from "react-icons/si"

const ProjectDescription = ({ padding, projectTitle, projectYear, projectDesc, projectStack }) => {
    return (
        <Box p={padding}>
            <Box display='flex' alignItems='center' mb='1rem'>
                <Heading
                    as="h2"
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {projectTitle}&nbsp;
                </Heading>
                <Badge borderRadius='full' mt="15px" px='2' colorScheme='purple'>
                    {projectYear}
                </Badge>
            </Box>

            <Text fontSize='sm' mb='1rem'>
                {projectDesc}
            </Text>

            {/* <Box display='flex' alignItems='center' mb='1rem'> */}
            <HStack spacing='15px' mb='1rem'>
                {projectStack.map((item) => {
                    return(
                        <Tooltip
                            key={item}
                            hasArrow
                            label={item.label}
                            colorScheme='purple'
                            placement='top'
                        >
                            <Box 
                                as='span'
                                fontSize="30px"
                            >   
                                {item.icon}
                            </Box>
                        </Tooltip>
                    )
                })}
            </HStack>
            {/* </Box> */}
        </Box>
    )
}

export default ProjectDescription