import { Box, Progress, Text } from '@chakra-ui/react'
import Section from './Section'
import useTranslation from 'next-translate/useTranslation'

const Loader = () => {
    let { t } = useTranslation()
    
    return (
        <Section>
            <Box
                h={{base: "auto", md: "calc(100vh - 160px)"}}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Text mb="1rem" fontFamily="Poppins">{t('common:loading')}</Text>
                <Progress size="xs" isIndeterminate w="40%" colorScheme="purple" />            
            </Box>
        </Section>
    )
}

export default Loader