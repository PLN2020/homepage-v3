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
    kurobeni: '#3F2B36',
    shikon: '#3C2F41',
    kokimurasaki: '#4A225D',
    edomurasaki: '#77428D',
    messhi: '#533D5B',
    fujimurasaki: '#8A6BBE',
    shion: '#8F77B5',
    murasaki: '#592C63'
}

const fonts = {
    heading: `'Shippori Mincho', serif`,
    body: `'Noto Sans', sans-serif`,
}

const theme = extendTheme({ styles, config, colors, fonts })
export default theme