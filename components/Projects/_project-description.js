import { Box, Heading, Badge, Text, Tooltip, HStack, VStack } from "@chakra-ui/react"
import ButtonLink from "../ButtonLink"

const ProjectDescription = ({ 
    projectTitle, 
    projectYear, 
    projectDesc, 
    projectStack, 
    firstLinkIcon, 
    firstLink, 
    firstLinkText,
    secondLinkIcon,
    secondLink,
    secondLinkText,
    ...props
}) => {
    return (
        <Box 
            as="section" 
            {...props}
        >
            <Box display='flex' alignItems='center' mb='1rem'>
                <Heading
                    as="h2"
                    lineHeight='tight'
                    noOfLines={1}
                    fontSize={{ base: "3xl", lg: "2xl", xl: "4xl"}}
                >
                    {projectTitle}&nbsp;
                </Heading>
                <Badge borderRadius='full' mt="15px" px='2' colorScheme='purple'>
                    {projectYear}
                </Badge>
            </Box>
            
            <Box>
                <Text 
                    fontSize={{ base: "md", lg: "sm", xl: "md" }}
                    mb='1rem'
                >
                    {projectDesc}
                </Text>
            </Box>

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

            <VStack align='start' spacing='1rem'>
                <ButtonLink 
                    icon={firstLinkIcon}
                    href={firstLink}
                    text={firstLinkText}
                />
                <ButtonLink 
                    icon={secondLinkIcon}
                    href={secondLink}
                    text={secondLinkText}
                />
            </VStack>
        </Box>
    )
}

export default ProjectDescription