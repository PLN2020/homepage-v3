import { Box, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, VStack, Progress, Text, Flex } from "@chakra-ui/react"
import { FrontEndData, BackEndData, WorkflowData } from "./toolkit-data"

const Toolkit = ({ padding, heading, tabOne, tabTwo, tabThree }) => {
    return (
        <Box 
            p={padding} 
            as="section"
        >
            <Heading as="h2" pb="1rem">
                {heading}
            </Heading>

            <Tabs isFitted colorScheme="purple">
                <TabList>
                    <Tab>{tabOne}</Tab>
                    <Tab>{tabTwo}</Tab>
                    <Tab>{tabThree}</Tab>
                </TabList>

                <TabPanels mt="1rem">
                    <TabPanel>
                        <VStack align='stretch' spacing={6}>
                            {FrontEndData.map((feSkill) => {
                                return (
                                    <Box key={feSkill}>
                                        <Flex alignItems="center" mb="2px">
                                            {feSkill.icon}
                                            <Text>&nbsp;{feSkill.name}</Text>
                                        </Flex>
                                        <Progress hasStripe value={feSkill.level} size="xs" colorScheme="purple" />
                                    </Box>
                                )
                            })}
                        </VStack>
                    </TabPanel>
                    
                    <TabPanel>
                        <VStack align='stretch' spacing={6}>
                            {BackEndData.map((beSkill) => {
                                return (
                                    <Box key={beSkill}>
                                        <Flex alignItems="center" mb="2px">
                                            {beSkill.icon}
                                            <Text>&nbsp;{beSkill.name}</Text>
                                        </Flex>
                                        <Progress hasStripe value={beSkill.level} size="xs" colorScheme="purple" />
                                    </Box>
                                )
                            })}
                        </VStack>
                    </TabPanel>

                    <TabPanel>
                        <VStack align='stretch' spacing={6}>
                            {WorkflowData.map((wfSkill) => {
                                return (
                                    <Box key={wfSkill}>
                                        <Flex alignItems="center" mb="2px">
                                            {wfSkill.icon}
                                            <Text>&nbsp;{wfSkill.name}</Text>
                                        </Flex>
                                        <Progress hasStripe value={wfSkill.level} size="xs" colorScheme="purple" />
                                    </Box>
                                )
                            })}
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Toolkit