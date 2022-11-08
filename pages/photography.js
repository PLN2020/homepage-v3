import { Box, Grid, GridItem, useColorModeValue, VStack } from '@chakra-ui/react';
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
            h="calc(100vh - 140px)"
            w="100vw"
            display="flex"
        >
            {/* Image Section */}
            <Box
                h="inherit"
                w="calc(200vw / 3)"
                bg={useColorModeValue('shironeri', 'sumi')}
                ref={ref}
                overflow="hidden"
                position="relative"
                zIndex={2}
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
                h="calc(100vh - 140px)"
                w="calc(100vw / 3)"
                spacing={0}
                borderLeft="1px solid"
            >
                {/* Navigation */}
                <Box
                    h="calc((100vh - 140px) / 3)"
                    w="inherit"
                    display="flex"
                    borderBottom="1px solid"
                >
                    <NavButton 
                        ariaLabel='Previous'
                        width="calc(100vw / 6)"
                        height="calc((100vh - 140px) / 3)"
                        direction="previous"
                        onClick={() => paginate(-1)}
                    />
                    <NavButton
                        ariaLabel='Next'
                        width="calc(100vw / 6)"
                        height="calc((100vh - 140px) / 3)"
                        direction="next"
                        onClick={() => paginate(1)}
                    />
                </Box>

                <Box
                    h="calc((100vh - 140px) / 3)"
                    w="inherit"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderBottom="1px solid"
                >
                    <Carousel
                        width="auto"
                        height="auto"
                        key={page}
                        custom={{direction, width}}
                        variants={variants}
                    >
                        <PhotoDesc 
                            city={t(`photography:${PhotoData[index].city}`)}
                            year={PhotoData[index].year}
                            camera={PhotoData[index].camera}
                            number={PhotoData[index].number}
                        />
                    </Carousel>
                </Box>

                <Box
                    h="calc((100vh - 140px) / 3)"
                    w="inherit"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Section>
                        <PageHeading 
                            padding="3rem"
                            title={t('photography:heading')}
                            icon={FaCameraRetro}
                            fontSize={{ base: "xl", xl: "2rem"}}
                            iconSize={{ base: "1rem", xl: "2rem"}}
                        />
                    </Section>
                </Box>
            </VStack>
        </Box>
        // <Grid
        //     as="section"
        //     h={{ base: "auto", lg: "calc(100vh - 140px)" }}
        //     w="100%"
        //     templateRows={{ base: "100%, 100%, 100%, 100%", lg: "repeat(3, 1fr)" }}
        //     templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
        //     gap={0}
        // >
        //     {/* Image Section */}
        //     <GridItem 
        //         ref={ref}
        //         rowSpan={{ base: "1", lg: "3" }}
        //         colSpan={{ base: "1", lg: "2" }}
        //         overflow="hidden" 
        //         position="relative"
        //         w={{ base: "100%", lg: "calc(200vw / 3)"}}
        //         h={{ base: "50vh", lg: "calc(100vh - 140px)" }}
        //         borderBottom={{ base: "1px solid", lg: "none"}}
        //         bg={useColorModeValue('shironeri', 'sumi')}
        //         zIndex={2}
        //     >
        //         <Carousel
        //             // width={{ base: "100%", lg: "calc(200vw / 3)"}}
        //             width="100%"
        //             height="100%"
        //             key={page}
        //             custom={{direction, width}}
        //             variants={variants}
        //             bgImage={PhotoData[index].src}
        //         />
        //     </GridItem>  

        //     {/* Nav Section */}
        //     <GridItem 
        //         rowSpan={1} 
        //         colSpan={1}
        //         h={{ md: "25vh", lg: "auto" }}
        //         w={{ lg: "calc(100vw / 3)"}}
        //         display="flex" 
        //         alignItems="center"
        //         justifyContent="center"
        //         borderLeft={{base: "none", lg: "1px solid"}}
        //         borderBottom="1px solid"
        //         zIndex={4}
        //     >
        //         <NavButton 
        //             ariaLabel='Previous'
        //             width={{ base: "50vw", lg: "calc(100vw / 6)" }}
        //             height={{ base: "calc(100vh/6)", md: "25vh", lg: "calc((100vh - 140px) / 3)"}}
        //             direction="previous"
        //             onClick={() => paginate(-1)}
        //         />
        //         <NavButton
        //             ariaLabel='Next'
        //             width={{ base: "50vw", lg: "calc(100vw / 6)" }}
        //             height={{ base: "calc(100vh/6)", md: "25vh", lg: "calc((100vh - 140px) / 3)"}}
        //             direction="next"
        //             onClick={() => paginate(1)}
        //         />
        //     </GridItem>

        //     {/* Photo Desc Section */}
        //     <GridItem 
        //         rowSpan={1} 
        //         colSpan={1}
        //         h={{ base: "10rem", lg: "auto" }}
        //         display="flex"
        //         alignItems="center"
        //         justifyContent="space-around"
        //         borderLeft={{ base: "none", lg: "1px solid"}}
        //         borderBottom="1px solid"
        //         // position="relative"
        //         zIndex={1}
        //     >
        //         <Carousel
        //             width="auto"
        //             height="auto"
        //             key={page}
        //             custom={{direction, width}}
        //             variants={variants}
        //         >
        //             <PhotoDesc 
        //                 city={t(`photography:${PhotoData[index].city}`)}
        //                 year={PhotoData[index].year}
        //                 camera={PhotoData[index].camera}
        //                 number={PhotoData[index].number}
        //             />
        //         </Carousel>
        //     </GridItem>

        //     {/* Page Heading Section */}
        //     <GridItem 
        //         rowSpan={1} 
        //         colSpan={1} 
        //         display="flex" 
        //         alignItems="center"
        //         justifyContent="center"
        //         borderLeft={{ base: "none", lg: "1px solid"}}
        //     >
        //         <Section>
        //             <PageHeading 
        //                 padding="3rem"
        //                 title={t('photography:heading')}
        //                 icon={FaCameraRetro}
        //                 fontSize={{ base: "xl", xl: "2rem"}}
        //                 iconSize={{ base: "1rem", xl: "2rem"}}
        //             />
        //         </Section>
        //     </GridItem>
        // </Grid>
    )
}

let variants = {
    enter: ({direction, width}) => (
        {
            x: direction > 0 ? -width : width,
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
            x: direction < 0 ? -width : width,
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