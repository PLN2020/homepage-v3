import { Box, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, Text, Flex, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { FrontEndData, BackEndData, WorkflowData } from "./toolkit-data"
import useTranslation from "next-translate/useTranslation";

const Toolkit = ({ padding, heading, tabOne, tabTwo, tabThree, description }) => {
    let { t } = useTranslation()
    return (
        <Box 
            p={padding} 
            as="section"
        >
            <Heading as="h2" pb="1rem">
                {heading}
            </Heading>

            <Box>
                <Text fontSize="sm">
                    {description}
                </Text>
            </Box>

            <Tabs isFitted colorScheme="purple">
                <TabList>
                    <Tab>{tabOne}</Tab>
                    <Tab>{tabTwo}</Tab>
                    <Tab>{tabThree}</Tab>
                </TabList>

                <TabPanels mt="1rem">
                    <TabPanel>
                        <Accordion allowToggle>
                            {FrontEndData.map((feSkill) => {
                                return (
                                    <AccordionItem key={feSkill}>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    <Flex alignItems="center" mb="2px" fontSize="md">
                                                        {feSkill.icon}
                                                        <Text>&nbsp;{feSkill.name}</Text>
                                                    </Flex>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>

                                        <AccordionPanel pb={4}>
                                            <Text fontSize="sm">{t(`about:${feSkill.text}`)}</Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </TabPanel>
                    
                    <TabPanel>
                        <Accordion allowToggle>
                            {BackEndData.map((beSkill) => {
                                return (
                                    <AccordionItem key={beSkill}>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    <Flex alignItems="center" mb="2px" fontSize="md">
                                                        {beSkill.icon}
                                                        <Text>&nbsp;{beSkill.name}</Text>
                                                    </Flex>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>

                                        <AccordionPanel pb={4}>
                                            <Text fontSize="sm">{t(`about:${beSkill.text}`)}</Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </TabPanel>

                    <TabPanel>
                        <Accordion allowToggle>
                            {WorkflowData.map((wfSkill) => {
                                return (
                                    <AccordionItem key={wfSkill}>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    <Flex alignItems="center" mb="2px" fontSize="md">
                                                        {wfSkill.icon}
                                                        <Text>&nbsp;{wfSkill.name}</Text>
                                                    </Flex>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>

                                        <AccordionPanel pb={4}>
                                            <Text fontSize="sm">{t(`about:${wfSkill.text}`)}</Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Toolkit