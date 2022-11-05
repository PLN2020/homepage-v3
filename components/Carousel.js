import { Box, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PhotoData } from "../components/Photography/photo-data";
import ChakraBox from "../components/ChakraBox";

const Carousel = ({ width, height, count, custom, variants, bgImage, children }) => {

    return (
        <AnimatePresence custom={custom}>
            <ChakraBox
                key={count}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                custom={custom}
                // transition={{ duration: 1 }}
                display='flex'
                position="absolute"
                h={height}
                w={width}
                alignItems='center' 
                justifyContent='center' 
                bgImage={bgImage}
                bgPosition="center"
                bgSize="cover"
            >
                {children}        
            </ChakraBox>
        </AnimatePresence>
    )
}

export default Carousel