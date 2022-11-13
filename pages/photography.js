import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react'
import { FaCameraRetro } from 'react-icons/fa';
import NavButton from '../components/NavButton';
import PageHeading from '../components/PageHeading';
import Section from '../components/Section';
import { useState } from 'react';
import useMeasure from 'react-use-measure'
import Carousel from '../components/Carousel';
import { PhotoData } from '../components/Photography/photo-data';
import useTranslation from 'next-translate/useTranslation';
import PhotoDesc from '../components/Photography/_photo-desc';
import { wrap } from 'popmotion'

const Photography = () => {
    let { t } = useTranslation()
    
    let [ref, { width }] = useMeasure()
    const [[page, direction], setPage] = useState([0, 0])
    const index = wrap(0, PhotoData.length, page)
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <Box 
            as="section"
            h={{ base: "auto", lg: "calc(100% - 140px)" }}
            w="100%"
            display={{ base: "", lg: "flex"}}
        >
            {/* Mobile Layout */}
            <Box
                // display={{ lg: "none" }}
                h={{ base: "calc(85vh - 100px)", lg: "calc(100vh - 140px)" }}
                w={{ base: "100%", lg: "calc(200% / 3)"}}
                bg={useColorModeValue('shironeri', 'sumi')}
                ref={ref}
                overflow="hidden"
                position="relative"
                zIndex={2}
                // borderLeft={{ base: "none", lg: "1px solid"}}
                borderBottom={{ base: "1px solid", lg: "none" }}
            >
                <Carousel
                    width="100%"
                    height="100%"
                    key={page}
                    custom={{direction, width}}
                    variants={variants}
                    bgImage={PhotoData[index].src}
                />
            </Box>

            {/* Right Side Menu */}
            <VStack
                h={{ base: "auto", lg: "calc(100vh - 140px)"}}
                w={{ base: "100%", lg: "calc(100% / 3)"}}
                spacing={0}
                borderLeft={{ lg: "1px solid"}}
            >
                {/* Navigation */}
                <Box
                    h={{ base: "15vh", lg: "calc(100% / 3)"}}
                    w="100%"
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid"
                >
                    <Box w="50%">
                        <NavButton 
                            ariaLabel='Previous'
                            height={{ base: "15vh", lg: "calc((100vh - 140px) / 3)" }}
                            direction="previous"
                            onClick={() => paginate(-1)}
                        />
                    </Box>

                    <Box w="50%">
                        <NavButton
                            ariaLabel='Next'
                            height={{ base: "15vh", lg: "calc((100vh - 140px) / 3)" }}
                            direction="next"
                            onClick={() => paginate(1)}
                        />
                    </Box>
                </Box>

                {/* Photo Description Section */}
                <Box
                    h={{ base: "175px", md: "350px", lg: "calc(100% / 3)" }}
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderBottom="1px solid"
                    ref={ref}
                >
                    <Carousel
                        key={page}
                        custom={{direction, width}}
                        variants={variants}
                    >
                        <PhotoDesc 
                            padding="3"
                            // width="inherit"
                            city={t(`photography:${PhotoData[index].city}`)}
                            year={PhotoData[index].year}
                            camera={PhotoData[index].camera}
                            number={PhotoData[index].number}
                        />
                    </Carousel>
                </Box>

                {/* Heading Section */}
                <Box
                    h={{ base: "175px", md: "350px", lg: "calc(100% / 3)" }}
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Section>
                        <PageHeading 
                            padding="0rem"
                            title={t('photography:heading')}
                            icon={FaCameraRetro}
                            fontSize={{ base: "2xl", md: "4em", lg: "2xl", xl: "4xl"}}
                            iconSize={{ base: "2rem", md: "4em", lg: "2em", xl: "2rem"}}
                        />
                    </Section>
                </Box>
            </VStack>

            {/* Image Section */}
            {/* <Box
                display={{ base: "none", lg: "flex"}}
                h={{ lg: "calc(100vh - 140px)"}}
                w="calc(200vw / 3)"
                bg={useColorModeValue('shironeri', 'sumi')}
                ref={ref}
                overflow="hidden"
                position="relative"
                zIndex={2}
                borderLeft="1px solid"
            >
                <Carousel
                    width="calc(200vw / 3)"
                    height="calc(100vh - 140px)"
                    key={page}
                    custom={{direction, width}}
                    variants={variants}
                    bgImage={PhotoData[index].src}
                />
            </Box> */}
        </Box>
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

export default Photography

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        props: {},
    };
}