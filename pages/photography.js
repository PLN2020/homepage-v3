import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { PhotoData } from "../components/Photography/photo-data"
import Lightbox from "../components/Photography/_lightbox"
import Section from "../components/Section"
import useTranslation from 'next-translate/useTranslation';

const Photography = () => {
    let { t } = useTranslation()
    return (
        <Box
            as="section"
            h={{ base: "auto", lg: "calc(100vh - 140px)" }}
            w="100%"
        >
            <SimpleGrid
                columns={{ base: "3", lg: "6" }}
                spacing="1px"
                bg={useColorModeValue('sumi', 'shironeri')}
                borderBottom="1px solid"
            >
                {PhotoData.map((photo) => {
                    return (
                        <Section key={photo}>
                            <Box
                                h="calc((100vh - 140px) / 3)"
                                w="100%"
                                
                                overflow="hidden"
                                transition="all 500ms"
                                _active={{ transform: 'scale(0.9)' }}
                            >
                                <Lightbox 
                                    src={photo.src}
                                    alt={photo.title}
                                    city={t(`photography:${photo.city}`)}
                                    year={photo.year}
                                    camera={photo.camera}
                                    extLink={photo.src}
                                    extLinkText={t('photography:ext-link-text')}
                                    closeText={t('photography:close-text')}
                                />
                            </Box>
                        </Section>
                    )
                })}
            </SimpleGrid>
        </Box>
    )
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