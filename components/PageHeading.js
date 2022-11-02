import { Box, Heading, Icon } from "@chakra-ui/react"

const PageHeading = ({ padding, title, icon }) => {
    return (
        <Box p={padding} display="flex" alignItems="center">
            <Heading as="h1" fontSize="8xl">
                {title}
            </Heading>
            
            <Box pt="15px" ml="2rem">
                <Icon as={icon} w="5rem" h="5rem" />
            </Box>
        </Box>
    )
}

export default PageHeading