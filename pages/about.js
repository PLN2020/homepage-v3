import { Box, Button, Grid, GridItem, Heading, Icon, Link, StackDivider, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Section from "../components/Section";
import { ImProfile } from 'react-icons/im'
import PageHeading from "../components/PageHeading";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
            <GridItem 
                rowSpan={2}
                colSpan={1}
                borderBottom="1px solid"
                borderColor={useColorModeValue('fujimurasaki', 'shion')}
            >
                <Section>
                    <Box p="2rem">
                        <Heading as="h2" pb="1rem">
                            {t('about:educationHead')}
                        </Heading>
                        <VStack
                            divider={<StackDivider borderColor='shion' />}
                            spacing={3}
                            align='stretch'
                        >
                            <Box>
                                <Heading as="h3" fontSize="md" pb="4px">
                                    {t('about:ed-one-title')}
                                </Heading>
                                <Text fontSize="sm">
                                    {t('about:ed-one-desc')}
                                </Text>
                            </Box>
                            <Box>
                                <Heading as="h3" fontSize="md" pb="4px">
                                    {t('about:ed-two-title')}
                                </Heading>
                                <Text fontSize="sm">
                                    {t('about:ed-two-desc')}
                                </Text>
                            </Box>
                            <Box>
                                <Heading as="h3" fontSize="md" pb="4px">
                                    {t('about:ed-three-title')}
                                </Heading>
                                <Text fontSize="sm">
                                    {t('about:ed-three-desc')}
                                </Text>
                            </Box>
                        </VStack>

                        <Text pt="1rem" pb="6px" fontSize="sm">
                            {t('about:jlpt')}
                        </Text>
                        <Button variant="outline" borderRadius={0} fontSize="sm" rightIcon={<ExternalLinkIcon />}>
                            <Link
                                href="https://www.jlpt.jp/e/about/levelsummary.html" 
                                target="_blank"
                            >
                                {t('about:jlpt-button')}
                            </Link>
                        </Button>
                    </Box>
                </Section>
            </GridItem>

            <GridItem rowSpan={2} colSpan={2} bg='shikon'/>

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

            <GridItem 
                rowSpan={1} 
                colSpan={1} 
                flexDirection="column"
                borderLeft="1px solid"
                borderColor={useColorModeValue('fujimurasaki', 'shion')}
            >
                <Section>
                    <Box p="2rem">
                        <Heading as="h2" pb="1rem">
                            {t('about:profileHead')}
                        </Heading>
                        <Text textAlign="left" fontSize="sm">
                            {t('about:profile')}
                        </Text>
                    </Box>
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