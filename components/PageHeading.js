import { Box, Heading, Icon, useColorModeValue } from "@chakra-ui/react"

const PageHeading = ({ padding, title, icon, fontSize, iconSize }) => {
    return (
        <Box 
            p={padding} 
            display="flex" 
            alignItems="center"
        >
            <Heading 
                as="h1" 
                fontSize= {fontSize} //{{ base: "4xl", lg:"8xl" }}
            >
                {title}
            </Heading>
            
            <Box pt={{ base: "10px", lg:"15px" }} ml={{ base: "1rem", lg: "2rem" }}>
                <Icon 
                    as={icon} 
                    w={iconSize} //{{ base: "2rem", lg: "5rem"}} 
                    h={iconSize}
                    color={useColorModeValue('fujimurasaki', 'shion')}
                />
            </Box>
        </Box>
    )
}

export default PageHeading