import { Button } from "@chakra-ui/react"
import ChakraBox from "./ChakraBox"

const NavButton = ({ ariaLabel, width, height, direction, onClick }) => {
    const arrow = 
    direction === "next"
    ? "→"
    : direction === "previous"
    ? "←"
    : ""

    const arrowMotion = {
        rest: {
            x: 0
        },
        hover: {
            x: direction === "next" ? 15 : -15,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeOut"
            },
        },
    }

    return (
        <ChakraBox initial="rest" whileHover="hover" animate="rest">
            <Button 
                variant="outline"
                aria-label={ariaLabel}
                border="none"
                borderRadius={0}
                // w={width}
                display="block"
                w="100%"
                h={height}
                fontSize="6xl"
                onClick={onClick}
            >
                <ChakraBox
                    // whileTap={{ scale: 1.02, y: "0.2rem" }}
                    variants={arrowMotion}
                >
                    {arrow}
                </ChakraBox>
            </Button>
        </ChakraBox>
    )
}

export default NavButton