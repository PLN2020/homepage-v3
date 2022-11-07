import { Grid, GridItem } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Section from "../components/Section";
import { ImProfile } from 'react-icons/im'
import PageHeading from "../components/PageHeading";
import Profile from "../components/About/_profile";
import Education from "../components/About/_education";
import Toolkit from "../components/About/_toolkit";

const About = () => {
    let { t } = useTranslation()

    return (
        <Grid
            as="section"
            h={{ base: "auto", xl: "calc(100vh - 140px)" }}
            w="100%"
            templateRows={{ base: "100%, 100%, 100%, 100%", xl: "repeat(3, 1fr)" }}
            templateColumns={{ base: '1fr', xl: 'repeat(3, 1fr)' }}
            gap={0}
        >
            {/* Page Heading Section */}
            <GridItem 
                rowSpan={1}
                colSpan={{ base: "1", xl: "2" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderBottom="1px solid"
                // borderColor={useColorModeValue('fujimurasaki', 'shion')}
            >
                <Section>
                    <PageHeading 
                        padding="3rem"
                        title={t('about:heading')} 
                        icon={ImProfile}
                        fontSize={{ base: "4xl", xl:"8xl" }}
                        iconSize={{ base: "2rem", xl: "5rem"}}
                    />
                </Section>
            </GridItem>

            {/* Toolkit Section */}
            <GridItem 
                rowSpan={3}
                colSpan={1} 
                borderLeft={{ base: "none", xl: "1px solid" }}
                borderBottom={{ base: "1px solid", xl: "none" }}
                // borderColor={useColorModeValue('fujimurasaki', 'shion')}
            >
                <Section>
                    <Toolkit 
                        padding="3rem"
                        heading={t('about:toolkit-head')}
                        tabOne={t('about:toolkit-tab-one')}
                        tabTwo={t('about:toolkit-tab-two')}
                        tabThree={t('about:toolkit-tab-three')}
                    />
                </Section>
            </GridItem>

            {/* Profile Section */}
            <GridItem 
                rowSpan={2} 
                colSpan={1} 
                flexDirection="column"
                borderBottom={{ base: "1px solid", xl: "none" }}
                // borderColor={useColorModeValue('fujimurasaki', 'shion')}
            >
                <Section>
                    <Profile 
                        padding="3rem" 
                        heading={t('about:profile-head')} 
                        text={t('about:profile')}
                        jlpt={t('about:jlpt')}
                        jlptButton={t('about:jlpt-button')}
                        photoButton={t('about:photo-button')}
                    />
                </Section>
            </GridItem>

            {/* Education Section */}
            <GridItem 
                rowSpan={2}
                colSpan={1}
                borderLeft={{ base: "none", xl: "1px solid" }}
                // borderColor={useColorModeValue('fujimurasaki', 'shion')}
            >
                <Section>
                    <Education 
                        padding="3rem"
                        heading={t('about:education-head')}
                        edOneHead={t('about:ed-one-title')}
                        edOneDesc={t('about:ed-one-desc')}
                        edTwoHead={t('about:ed-two-title')}
                        edTwoDesc={t('about:ed-two-desc')}
                        edThreeHead={t('about:ed-three-title')}
                        edThreeDesc={t('about:ed-three-desc')}
                    />
                </Section>
            </GridItem>
        </Grid>
    )
}

export default About

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        props: {},
    };
}