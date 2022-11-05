import { Box, Button, Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import Section from "../components/Section";
import PageHeading from "../components/PageHeading";
import useTranslation from "next-translate/useTranslation";
import { FaDatabase, FaGithub, FaYoutube } from "react-icons/fa";
import ProjectDescription from "../components/Projects/_project-description";
import { BraidStack } from "../components/Projects/projects-data";
import ButtonLink from "../components/ButtonLink";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
    let { t } = useTranslation()
    let [count, setCount] = useState(1)

    return (
        <Grid
            as="section"
            h="calc(100vh - 140px)"
            w="100%"
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={0}
            flexGrow={1}
            position="relative"
        >
            {/* Project Description Section */}
            <AnimatePresence>
                <GridItem 
                    rowSpan={2}
                    colSpan={1}
                    borderBottom="1px solid"
                >
                    <Section>
                        <Box 
                            p='3rem' 
                            as={motion.div}
                        >
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
                    borderLeft="1px solid"
                    borderBottom="1px solid"
                    overflow='hidden'
                >
                    <Section>
                    <Box
                        key="1"
                        as={motion.div}
                        intial={{ x: 100 }}
                        animate={{ x: 0 }}
                    >
                        <Image 
                            src="https://res.cloudinary.com/ditoikfqn/image/upload/v1664611782/NextJS-Portfolio/braid_pn2hjz.jpg" 
                            alt="Braid website image" 
                        />
                    </Box>
                    <Box
                        key="0"
                        as={motion.div}
                        intial={{ x: 100 }}
                        animate={{ x: 0 }}
                    >
                        <Image 
                            src="https://res.cloudinary.com/ditoikfqn/image/upload/v1663102401/NextJS-Portfolio/background_p0bazx.jpg" 
                            alt="Braid website image" 
                        />
                    </Box>
                    </Section>
                </GridItem>
            </AnimatePresence>

            {/* Navigation Section */}
            <GridItem 
                rowSpan={1} 
                colSpan={1}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
            >
                <Section>
                    <Box>
                        <Button 
                            variant="outline"
                            aria-label="Previous project"
                            border="none"
                            borderRadius={0}
                            w="calc(100vw / 6)"
                            h="calc((100vh - 140px) / 3)"
                            fontSize="6xl"
                            onClick={() => setCount(count - 1)}
                        >
                            <Box
                                as={motion.div}
                                whileHover={{ translateX: -10 }}
                                whileTap={{ scale: 1.02, translateY: "0.2rem" }}
                            >
                                ←
                            </Box>
                        </Button>
                    </Box>
                </Section>

                <Section>
                    <Box>
                        <Button 
                            variant="outline"
                            aria-label="Next project"
                            border="none"
                            borderRadius={0}
                            w="calc(100vw / 6)"
                            h="calc((100vh - 140px) / 3)"
                            fontSize="6xl"
                            onClick={() => setCount(count + 1)}
                        >
                            <Box
                                as={motion.div}
                                whileHover={{ translateX: 10 }}
                                whileTap={{ scale: 1.02, translateY: "0.2rem" }}
                            >
                                →
                            </Box>
                        </Button>
                    </Box>
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