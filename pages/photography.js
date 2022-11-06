import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
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
    let [ref, { width }] = useMeasure()
    let { t } = useTranslation()

    const [[page, direction], setPage] = useState([0, 0])
    const index = wrap(0, PhotoData.length, page)
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection])
    } 

    return (
        <Grid
            as="section"
            h="calc(100vh - 140px)"
            w="100%"
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={0}
        >
            {/* Image Section */}
            <GridItem 
                ref={ref}
                rowSpan={3}
                colSpan={2}
                overflow="hidden" 
                position="relative"
                zIndex={2}
                w="calc(200vw / 3)"
                bg={useColorModeValue('shironeri', 'sumi')}
            >
                <Carousel
                    width="100%"
                    height="100%"
                    key={page}
                    custom={{direction, width}}
                    variants={variants}
                    bgImage={PhotoData[index].src}
                />
            </GridItem>  

            {/* Nav Section */}
            <GridItem 
                rowSpan={1} 
                colSpan={1}
                display="flex" 
                alignItems="center"
                justifyContent="center"
                borderLeft="1px solid"
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
            </GridItem>

            {/* Photo Desc Section */}
            <GridItem 
                rowSpan={1} 
                colSpan={1}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                borderLeft="1px solid"
                borderBottom="1px solid"
                // position="relative"
                zIndex={1}
            >
                <Carousel
                    width="auto"
                    height="auto"
                    // count={count}
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
            </GridItem>

            {/* Page Heading Section */}
            <GridItem 
                rowSpan={1} 
                colSpan={1} 
                display="flex" 
                alignItems="center"
                justifyContent="center"
                borderLeft="1px solid"
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
            </GridItem>
        </Grid>
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