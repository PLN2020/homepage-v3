import { AnimatePresence } from "framer-motion";
import ChakraBox from "../components/ChakraBox";

const Carousel = ({ width, height, key, custom, variants, bgImage, children }) => {

    return (
        <AnimatePresence custom={custom}>
            <ChakraBox
                key={key}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                custom={custom}
                transition={{ duration: 0.4 }}
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