import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import PageHeading from '../PageHeading'
import useTranslation from 'next-translate/useTranslation'
import { FaDatabase } from 'react-icons/fa'
import { useState } from 'react'
import useMeasure from 'react-use-measure'
import { wrap } from 'popmotion'
import { ProjectsData } from './projects-data'
import Carousel from '../Carousel'
import NavButton from '../NavButton'
import ProjectDescription from './_project-description'

const ProjectsMobile = ({ ...props }) => {
    let { t } = useTranslation()

    let [ref, { width }] = useMeasure()
    const [[page, direction], setPage] = useState([0, 0])
    const index = wrap(0, ProjectsData.length, page)
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection])
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

    return (
        <Box {...props}>
            {/* Heading */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderBottom="1px solid"
                w="100%"
                minH="10vh"
            >
                <PageHeading
                    padding="1rem"
                    title={t('projects:heading')} 
                    icon={FaDatabase}
                    fontSize="3xl"
                    iconSize="2rem"
                />
            </Box>

            {/* Image */}
            <Box
                as="section"
                h={{ base: "25vh", sm: "50vh" }}
                w="100%"
                ref={ref}
                overflow="hidden"
                pos="relative"
                borderBottom="1px solid"
            >
                <Carousel
                    width="100%"
                    height="100%"
                    key={page}
                    custom={{direction, width}}
                    variants={variants}
                    bgImage={ProjectsData[index].img}
                />
            </Box>

            {/* Navigation */}
            <Box
                as="section"
                display="flex"
                borderBottom="1px solid"
            >
                <Box w="50%">
                    <NavButton
                        ariaLabel='Previous'
                        height="auto"
                        direction="previous"
                        onClick={() => paginate(-1)}
                    />
                </Box>
                <Box w="50%">
                    <NavButton
                        ariaLabel='Next'
                        height="auto"
                        direction="next"
                        onClick={() => paginate(1)}
                    />
                </Box>
            </Box>

            {/* Description */}
            <Box
                as="section"
                ref={ref}
                w="100%"
                // h="auto"
                // minH="calc(55vh - 140px)"
            >
                <Carousel
                    key={page}
                    custom={{direction, width}}
                    variants={variants}
                >
                    <ProjectDescription
                        py="2rem"
                        px="3rem"
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
            </Box>
        </Box>
    )
}

export default ProjectsMobile