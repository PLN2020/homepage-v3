import { EmailIcon } from "@chakra-ui/icons";
import { Box, Button, useColorModeValue } from "@chakra-ui/react"
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
                p="3rem"
            >
                <Section>
                    <PageHeading 
                        padding="0 0 1rem 0"
                        title={t('contact:heading')}
                        icon={EmailIcon}
                        fontSize={{ base: "4xl", lg: "6xl", xl:"7xl" }}
                        iconSize={{ base: "2rem", lg: "4rem", xl: "5rem" }} 
                    />
                    <ContactForm 
                        preface={t('contact:status')}
                        nameText={t('contact:name')}
                        emailText={t('contact:email')}
                        messageText={t('contact:message')}
                        buttonText={t('contact:button')}
                        alertSuccessTitle={t('contact:alert-success-title')}
                        alertSuccessDesc={t('contact:alert-success-desc')}
                        alertErrorTitle={t('contact:alert-error-title')}
                        alertErrorDesc={t('contact:alert-error-desc')}
                        buttonLoadingText={t('contact:button-loading-text')}
                    />
                </Section>
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