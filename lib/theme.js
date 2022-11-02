import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: props => ({
        body: {
            bg: mode('shironeri', 'sumi')(props)
        }
    })
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: 'false',
}

const colors = {
    shironeri: '#FCFAF2',
    sumi: '#1C1C1C',
    fujimurasaki: '#8A6BBE',
    shion: '#8F77B5',
}

const fonts = {
    heading: `'Shippori Mincho', serif`,
    body: `'Noto Sans', sans-serif`,
}

const theme = extendTheme({ styles, config, colors, fonts })
export default theme