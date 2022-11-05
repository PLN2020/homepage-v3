import { Button } from "@chakra-ui/react"
import ChakraBox from "./ChakraBox"

const NavButton = ({ ariaLabel, width, height, direction, onClick }) => {
    const arrow = 
    direction === "next"
    ? "→"
    : direction === "previous"
    ? "←"
    : ""

    return (
        <Button 
            variant="outline"
            aria-label={ariaLabel}
            border="none"
            borderRadius={0}
            w={width}
            h={height}
            fontSize="6xl"
            onClick={onClick}
        >
            <ChakraBox
                whileHover={{ x: 10 }}
                whileTap={{ scale: 1.02, y: "0.2rem" }}
            >
                {arrow}
            </ChakraBox>
        </Button>
    )
}

export default NavButton