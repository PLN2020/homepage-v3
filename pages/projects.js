import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/Section";
import PageHeading from "../components/PageHeading";
import useTranslation from "next-translate/useTranslation";
import { FaDatabase } from "react-icons/fa";
import ProjectDescription from "../components/Projects/_project-description";
import { useState } from "react";
import useMeasure from 'react-use-measure'
import { wrap } from 'popmotion'
import { ProjectsData } from "../components/Projects/projects-data";
import Carousel from '../components/Carousel';
import NavButton from "../components/NavButton";

const Projects = () => {
    let { t } = useTranslation()

    let [ref, { width }] = useMeasure()
    const [[page, direction], setPage] = useState([0, 0])
    const index = wrap(0, ProjectsData.length, page)
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <Grid
            as="section"
            h={{ base: "auto", lg: "calc(100vh - 140px)" }}
            w="100%"
            templateRows={{ base: "repeat(6, 1fr)", lg: "repeat(3, 1fr)" }}
            templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
            gap={0}
        >
            {/* Project Description Section */}
            <GridItem 
                rowSpan={{ base: "3", lg: "2"}}
                colSpan={1}
                borderBottom="1px solid"
                ref={ref}
            >
                <Carousel
                    width="auto"
                    height="auto"
                    key={page}
                    custom={{direction, width}}
                    variants={variants}
                >
                    <ProjectDescription 
                        padding={{ base: "2rem", lg: "3rem"}}
                        width={{base: "100%", lg: "calc(100vw / 3)"}}
                        projectTitle={ProjectsData[index].projectTitle}
                        projectYear={ProjectsData[index].projectYear}
                        projectDesc={t(`projects:${ProjectsData[index].projectDesc}`)}
                        projectStack={ProjectsData[index].projectStack}
                        firstLinkIcon={ProjectsData[index].firstLinkIcon}
                        firstLink={ProjectsData[index].firstLink}
                        firstLinkText={t(`projects:${ProjectsData[index].firstLinkText}`)}
                        secondLinkIcon={ProjectsData[index].secondLinkIcon}
                        secondLink={ProjectsData[index].secondLink}
                        secondLinkText={t(`projects:${ProjectsData[index].secondLinkText}`)}
                    />
                </Carousel>
            </GridItem>  

            {/* Project Image Section */}
            <GridItem 
                rowSpan={{ base: "1", lg: "2"}} 
                colSpan={{ base: "1", lg: "2"}} 
                borderLeft={{ base: "none", lg: "1px solid"}}
                borderBottom="1px solid"
                overflow='hidden'
                ref={ref}
                position="relative"
                bg={useColorModeValue('shironeri', 'sumi')}
                zIndex={2}
            >
                <Carousel
                    width="100%"
                    height="100%"
                    key={page}
                    custom={{direction, width}}
                    variants={variants}
                    bgImage={ProjectsData[index].img}
                />
            </GridItem>

            {/* Navigation Section */}
            <GridItem 
                rowSpan={1} 
                colSpan={1}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                borderBottom={{ base: "1px solid", lg: "none" }}
            >
                <NavButton
                    ariaLabel='Previous'
                    width={{ base: "50vw", lg: "calc(100vw / 6)" }}
                    height={{ base: "calc(100vh/6)", md: "25vh", lg: "calc((100vh - 140px) / 3)"}}
                    direction="previous"
                    onClick={() => paginate(-1)}
                />
                <NavButton
                    ariaLabel='Next'
                    width={{ base: "50vw", lg: "calc(100vw / 6)" }}
                    height={{ base: "calc(100vh/6)", md: "25vh", lg: "calc((100vh - 140px) / 3)"}}
                    direction="next"
                    onClick={() => paginate(1)}
                />
            </GridItem>

            {/* Page Heading Section */}
            <GridItem 
                rowSpan={1} 
                colSpan={{ base: "1", lg: "2"}}
                display="flex" 
                alignItems="center"
                justifyContent="center"
                borderLeft={{ base: "none", lg: "1px solid"}}
            >
                <Section>
                    <PageHeading 
                        padding="3rem"
                        title={t('projects:heading')} 
                        icon={FaDatabase}
                        fontSize={{ base: "4xl", xl:"8xl" }}
                        iconSize={{ base: "2rem", xl: "5rem"}}
                    />
                </Section>
            </GridItem>
        </Grid>
    )
}

let variants = {
    enter: ({direction, width}) => (
        {
            x: direction > 0 ? width : -width,
            opacity: 0
        }
    ),
    center: {
        x: 0,
        opacity: 1
    },
    exit: ({direction, width}) => (
        {
            zIndex: 0,
            x: direction < 0 ? width : -width,
            opacity: 0
        }
    ),
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