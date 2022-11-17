import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Section from "../Section";
import PageHeading from "../PageHeading";
import useTranslation from "next-translate/useTranslation";
import { FaDatabase } from "react-icons/fa";
import ProjectDescription from "./_project-description";
import { useState } from "react";
import useMeasure from 'react-use-measure'
import { wrap } from 'popmotion'
import NavButton from "../NavButton";
import { ProjectsData } from "./projects-data";
import Carousel from "../Carousel";

const ProjectsDesktop = ({ ...props }) => {
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
            h="calc(100vh - 140px)"
            w="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={0}
            {...props}
        >
            {/* Project Description Section */}
            <GridItem 
                rowSpan={2}
                colSpan={1}
                borderBottom="1px solid"
                ref={ref}
            >
                <Carousel
                    key={page}
                    custom={{direction, width}}
                    variants={variants}
                >
                    <ProjectDescription 
                        p="3rem"
                        w="calc(100vw / 3)"
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
                        h={{ lg: "calc((100vh - 140px) * 2/3)" }}
                        overflow="auto"
                    />
                </Carousel>
            </GridItem>  

            {/* Project Image Section */}
            <GridItem 
                ref={ref}
                rowSpan={2} 
                colSpan={2} 
                overflow='hidden'
                position="relative"
                borderLeft="1px solid"
                borderBottom="1px solid"
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
            >
                <Box w="50%">
                    <NavButton
                        ariaLabel='Previous'
                        width="calc(100% / 6)"
                        height="calc((100vh - 140px) / 3)"
                        direction="previous"
                        onClick={() => paginate(-1)}
                    />
                </Box>
                <Box w="50%">
                    <NavButton
                        ariaLabel='Next'
                        width="calc(100% / 6)"
                        height="calc((100vh - 140px) / 3)"
                        direction="next"
                        onClick={() => paginate(1)}
                    />
                </Box>
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
                        fontSize={{ lg: "6xl", xl:"8xl" }}
                        iconSize={{ lg: "3rem", xl: "5rem"}}
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

export default ProjectsDesktop