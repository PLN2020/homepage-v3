import { Box, Progress, Text } from '@chakra-ui/react'
import Section from './Section'
import useTranslation from 'next-translate/useTranslation'
import { AnimatePresence, motion } from 'framer-motion'

const Loader = () => {
    let { t } = useTranslation()
    
    return (
        // <Section>
        <AnimatePresence>
            <Box
                as={motion.div}
                key="loader"
                h="calc(100vh - 140px)"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition="0.6s delay"
            >
                <Text mb="1rem" fontFamily="Poppins">{t('common:loading')}</Text>
                <Progress size="xs" isIndeterminate w="40%" colorScheme="purple" />            
            </Box>
        </AnimatePresence>
        // </Section>
    )
}

export default Loader