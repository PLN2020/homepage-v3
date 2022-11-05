import { Box, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PhotoData } from "../components/Photography/photo-data";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ChakraBox from "../components/ChakraBox";
import useMeasure from 'react-use-measure'
import NavButton from "../components/NavButton";
import Carousel from "../components/Carousel";

const Photography = () => {
    let [count, setCount] = useState(1)
    let [ref, { width }] = useMeasure()
    let prev = usePrevious(count)
    let direction = count > prev ? 1 : -1

    return (
        <Box
            h="calc(100vh - 140px)"
        >
            <Box display="flex" justifyContent="space-between" pt={4} px={4}>
                <NavButton 
                    ariaLabel='Previous'
                    width="40px"
                    height="40px"
                    direction="previous"
                    onClick={() => setCount(count - 1)}
                />
                <NavButton 
                    ariaLabel='Next'
                    width="40px"
                    height="40px"
                    direction="next"
                    onClick={() => setCount(count + 1)}
                />
            </Box>

            <Box display="flex" justifyContent="center" mt={8}>
                <Box 
                    ref={ref} 
                    w="400px" 
                    h="400px" 
                    bg="gray.700" 
                    display="flex" 
                    justifyContent='center' 
                    alignItems='center' 
                    overflow="hidden" 
                    position="relative"
                >
                    {/* <AnimatePresence custom={{direction, width}}>
                        <ChakraBox
                            key={count}
                            variants={variants}
                            initial='enter'
                            animate='center'
                            exit='exit'
                            custom={{direction, width}}
                            // transition={{ duration: 1 }}
                            display='flex'
                            position="absolute"
                            h="380px"
                            w="380px"
                            alignItems='center' 
                            justifyContent='center' 
                            bgImage={PhotoData[Math.abs(count) % PhotoData.length].src}
                            bgPosition="center"
                            bgSize="cover"
                        >
                            {count}        
                        </ChakraBox>
                    </AnimatePresence> */}
                    <Carousel 
                        width="380px"
                        height="380px"
                        count={count}
                        custom={{direction, width}}
                        variants={variants}
                        bgImage={PhotoData[Math.abs(count) % PhotoData.length].src}
                    />
                </Box>
            </Box>
        </Box>
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