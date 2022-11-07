import { EmailIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react"
import ContactForm from "../components/Contact/_contact-form";
import ContactMap from "../components/Contact/_contact-map";
import PageHeading from "../components/PageHeading";
import Section from "../components/Section";

const Contact = () => {

    return (
        <Box
            as="section"
            h="calc(100vh - 140px)"
            display="flex"
        >
            <Box 
                w="50vw"
                h="inherit"
            >
                <Box
                    h="calc((100vh - 140px) / 3)"
                    borderBottom="1px solid"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Section>
                        <PageHeading 
                            padding="3rem"
                            title="CONTACT"
                            icon={EmailIcon}
                            fontSize={{ base: "4xl", lg:"7xl" }}
                            iconSize={{ base: "2rem", lg: "5rem"}} 
                        />
                    </Section>
                </Box>

                
                    <Box
                        p="3rem"
                    >
                        <Section>
                            <ContactForm />
                        </Section>
                    </Box>
            </Box>

            <Box 
                w="50vw"
                h="inherit"
                borderLeft="1px solid"
            >
                <ContactMap />  
            </Box>
        </Box>
    )
}

export default Contact