import { EmailIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react"
import ContactForm from "../components/Contact/_contact-form";
import ContactMap from "../components/Contact/_contact-map";
import PageHeading from "../components/PageHeading";
import Section from "../components/Section";
import useTranslation from "next-translate/useTranslation";

const Contact = () => {
    let { t } = useTranslation()

    return (
        <Box
            as="section"
            h={{ sm: "auto", lg: "calc(100vh - 140px)"}}
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
        >
            <Box 
                w={{ sm: "100vw", lg: "50vw"}}
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
                            title={t('contact:heading')}
                            icon={EmailIcon}
                            fontSize={{ base: "4xl", lg: "6xl", xl:"7xl" }}
                            iconSize={{ base: "2rem", lg: "4rem", xl: "5rem" }} 
                        />
                    </Section>
                </Box>

                <Box p="3rem">
                    <Section>
                        <ContactForm 
                            status={t('contact:status')}
                            name={t('contact:name')}
                            email={t('contact:email')}
                            message={t('contact:message')}
                        />
                    </Section>
                </Box>
            </Box>

            <Box 
                w="50vw"
                h="inherit"
                borderLeft="1px solid"
                display={{ base: "none", lg: "inline-block"}}
            >
                <ContactMap />  
            </Box>
        </Box>
    )
}

export default Contact

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        props: {},
    };
}