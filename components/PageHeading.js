import { Box, Heading, Icon } from "@chakra-ui/react"

const PageHeading = ({ title, icon }) => {
    return (
        <Box display="flex" alignItems="center">
            <Heading p="2rem" as="h1" fontSize="8xl">
                {title}
            </Heading>
            <Box pt="15px" >
                <Icon as={icon} w="5rem" h="5rem" />
            </Box>
        </Box>
    )
}

export default PageHeading