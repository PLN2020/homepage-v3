import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import Section from "../components/Section";
import PageHeading from "../components/PageHeading";
import useTranslation from "next-translate/useTranslation";
import { FaDatabase, FaGithub, FaYoutube } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ProjectDescription from "../components/Projects/_project-description";
import { BraidStack } from "../components/Projects/projects-data";
import ButtonLink from "../components/ButtonLink";

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
        flexGrow={1}
    >
        {/* Project Description Section */}
        <GridItem 
            rowSpan={2}
            colSpan={1}
            borderBottom="1px solid"
        >
            <Section>
                <Box p='3rem'>
                    <ProjectDescription 
                        padding="0"
                        projectTitle="Braid"
                        projectYear="2021"
                        projectDesc={t('projects:braid-description')}
                        projectStack={BraidStack}
                    />
                    <VStack align='start' spacing='1rem'>
                        <ButtonLink 
                            icon={<FaGithub />}
                            href="https://github.com/AntoineBoucherCodes/Braid"
                            text={t('projects:braid-source')}
                        />
                        <ButtonLink 
                            icon={<FaYoutube />}
                            href="https://www.youtube.com/watch?v=7VBFMMoaGkA&t=1528s"
                            text={t('projects:braid-youtube')}
                        />
                    </VStack>
                </Box>
            </Section>
        </GridItem>

        {/* Project Image Section */}
        <GridItem 
            rowSpan={2} 
            colSpan={2} 
            flexDirection="column"
            borderLeft="1px solid"
            borderBottom="1px solid"
            // borderColor={useColorModeValue('fujimurasaki', 'shion')}
        >
            <Section>

            </Section>
        </GridItem>

        {/* Navigation Section */}
        <GridItem 
            rowSpan={1} 
            colSpan={1} 
            // borderLeft="1px solid"
            // borderBottom="1px solid"
            // borderColor={useColorModeValue('fujimurasaki', 'shion')}
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
            // borderColor={useColorModeValue('fujimurasaki', 'shion')}
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