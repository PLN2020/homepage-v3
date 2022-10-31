import { Box } from '@chakra-ui/react'
import Section from '../components/Section';

export default function Home() {
  return (
    <Box
        h={{base: "auto", md: "calc(100vh - 160px)"}}
    >
        <Section>
            Index
        </Section>
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