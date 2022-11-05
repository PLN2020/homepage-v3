import { Grid, GridItem } from '@chakra-ui/react';
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

const Photography = () => {
    let [count, setCount] = useState(0)
    let [ref, { width }] = useMeasure()
    let prev = usePrevious(count)
    let direction = count > prev ? 1 : -1
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
            {/* Image Section */}
            <GridItem 
                ref={ref}
                rowSpan={3}
                colSpan={2}
                // borderBottom="1px solid"
                overflow="hidden" 
                position="relative"
                zIndex={1}
                w="calc(200vw / 3)"
            >
                <Carousel
                    width="100%"
                    height="100%"
                    count={count}
                    custom={{direction, width}}
                    variants={variants}
                    bgImage={PhotoData[Math.abs(count) % PhotoData.length].src}
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
                    onClick={() => setCount(count - 1)}
                />
                <NavButton
                    ariaLabel='Next'
                    width="calc(100vw / 6)"
                    height="calc((100vh - 140px) / 3)"
                    direction="next"
                    onClick={() => setCount(count + 1)}
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
            >
                <Carousel
                    width="auto"
                    height="auto"
                    count={count}
                    custom={{direction, width}}
                    variants={variants}
                >
                    <PhotoDesc 
                        city={t(`photography:${PhotoData[Math.abs(count) % PhotoData.length].city}`)}
                        year={PhotoData[Math.abs(count) % PhotoData.length].year}
                        camera={PhotoData[Math.abs(count) % PhotoData.length].camera}
                        number={PhotoData[Math.abs(count) % PhotoData.length].number}
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
    enter: ({direction, width}) => ({ x: direction * width }),
    center: { x: 0 },
    exit: ({direction, width}) => ({ x: direction * -width }),
}

function usePrevious(state) {
    let [tuple, setTuple] = useState([null, state]) // [ prev, current ]
    if (tuple[1] !== state) {
        setTuple([tuple[1], state])
    }

    return tuple[0]
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