import { Box, Center, Heading, Text, Highlight, Flex, Button } from '@chakra-ui/react'
import Section from '../components/Section';
import useTranslation from 'next-translate/useTranslation';
import NextLink from "next/link"
import { EmailIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';

export default function Home() {
    let { t } = useTranslation()

    return (
        <Box
            h={{base: "auto", md: "calc(100vh - 140px)"}}
        >
            <Center
                as="section"
                h="calc(100vh - 140px)"
                bgAttachment="fixed"
                bgPosition="center"
                bgSize="cover"
                bgImage="url('https://res.cloudinary.com/ditoikfqn/image/upload/v1663102401/NextJS-Portfolio/background_p0bazx.jpg')"
            >
                <Box
                    pos="absolute"
                    top="100"
                    left="0"
                    right="0"
                    bottom="0"
                    bgColor="blackAlpha.600"
                    h="calc(100vh - 140px)"
                />
                
                
                <Box
                    zIndex={2}
                >
                    <Section>
                        <Heading as="h1" fontFamily="Poppins" fontSize={{base: "2xl", md: "5xl"}} textColor="shironeri">
                            Patrick-Lam Nguyen
                        </Heading>
                        <Text color="shironeri" fontSize="lg">
                            <Highlight 
                                query={['Web Developer', 'Développeur Web', 'Web開発者']}
                                styles={{ px: "0.5", py: "0.5", fontWeight: "bold", bg: "purple.200"}}
                            >
                                {t('index:title')}
                            </Highlight>
                        </Text>
                        <Text fontSize="xs" color="shironeri">
                            {t('index:city')}
                        </Text>

                        <Flex mt="1rem">
                            <Box mr="1rem">
                                <NextLink href="/about" passHref scroll={false}>
                                    <Button 
                                        borderRadius={0} 
                                        rightIcon={<InfoOutlineIcon />} 
                                        border="1px solid"
                                        borderColor={useColorModeValue('sumi', 'shironeri')}
                                    >
                                        {t('index:about')}
                                    </Button>
                                </NextLink>
                            </Box>

                            <Box>
                                <NextLink href="/contact" passHref scroll={false}>
                                    <Button 
                                        borderRadius={0} 
                                        rightIcon={<EmailIcon />} 
                                        border="1px solid"
                                        borderColor={useColorModeValue('sumi', 'shironeri')}
                                    >
                                        {t('index:contact')}
                                    </Button>
                                </NextLink>
                            </Box>
                        </Flex>
                    </Section>
                </Box>
                
            </Center>
        </Box>
    )
}

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        props: {},
    };
}