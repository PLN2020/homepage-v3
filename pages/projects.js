import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/Section";
import PageHeading from "../components/PageHeading";
import useTranslation from "next-translate/useTranslation";
import { FaDatabase } from "react-icons/fa";

const Projects = () => {
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
        {/* Project Description Section */}
        <GridItem 
            rowSpan={2}
            colSpan={1}
            borderBottom="1px solid"
            borderColor={useColorModeValue('fujimurasaki', 'shion')}
        >
            <Section>

            </Section>
        </GridItem>

        {/* Project Image Section */}
        <GridItem 
            rowSpan={2} 
            colSpan={2} 
            flexDirection="column"
            borderLeft="1px solid"
            borderBottom="1px solid"
            borderColor={useColorModeValue('fujimurasaki', 'shion')}
        >
            <Section>

            </Section>
        </GridItem>

        {/* Navigation Arrows Section */}
        <GridItem 
            rowSpan={1} 
            colSpan={1} 
            // borderLeft="1px solid"
            // borderBottom="1px solid"
            borderColor={useColorModeValue('fujimurasaki', 'shion')}
        >
            <Section>

            </Section>
        </GridItem>

        {/* Page Heading Section */}
        <GridItem 
            rowSpan={1} 
            colSpan={2} 
            display="flex" 
            alignItems="center"
            justifyContent="center"
            borderLeft="1px solid"
            borderColor={useColorModeValue('fujimurasaki', 'shion')}
        >
            <Section>
                <PageHeading 
                    padding="3rem"
                    title={t('projects:heading')} 
                    icon={FaDatabase}
                />
            </Section>
        </GridItem>
    </Grid>
    )
}

export default Projects

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        props: {},
    };
}