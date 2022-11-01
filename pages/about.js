import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Section from "../components/Section";
import { ImProfile } from 'react-icons/im'
import PageHeading from "../components/PageHeading";
import Profile from "../components/About/_profile";
import Education from "../components/About/_education";

const About = () => {
    let { t } = useTranslation()

    return (
        <Grid
            as="section"
            h="calc(100vh - 140px)"
            w="100%"
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={0}
        >
            {/* Education Section */}
            <GridItem 
                rowSpan={2}
                colSpan={1}
                borderBottom="1px solid"
                borderColor={useColorModeValue('fujimurasaki', 'shion')}
            >
                <Section>
                    <Education 
                        padding="2rem"
                        heading={t('about:educationHead')}
                        edOneHead={t('about:ed-one-title')}
                        edOneDesc={t('about:ed-one-desc')}
                        edTwoHead={t('about:ed-two-title')}
                        edTwoDesc={t('about:ed-two-desc')}
                        edThreeHead={t('about:ed-three-title')}
                        edThreeDesc={t('about:ed-three-desc')}
                        jlpt={t('about:jlpt')}
                        jlptButton={t('about:jlpt-button')}
                    />
                </Section>
            </GridItem>

            {/* Toolkit Section */}
            <GridItem rowSpan={2} colSpan={2} bg='shikon'/>

            {/* Page Heading Section */}
            <GridItem 
                rowSpan={1} 
                colSpan={2} 
                display="flex" 
                alignItems="center"
                borderColor={useColorModeValue('fujimurasaki', 'shion')}
            >
                <Section>
                    <PageHeading title={t('about:heading')} icon={ImProfile} />
                </Section>
            </GridItem>

            {/* Profile Section */}
            <GridItem 
                rowSpan={1} 
                colSpan={1} 
                flexDirection="column"
                borderLeft="1px solid"
                borderColor={useColorModeValue('fujimurasaki', 'shion')}
            >
                <Section>
                    <Profile padding="2rem" heading={t('about:profileHead')} text={t('about:profile')} />
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