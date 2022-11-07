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
                            {FrontEndData.map((skill) => {
                                return (
                                    <Box key={skill}>
                                        <Flex alignItems="center" mb="2px">
                                            {skill.icon}
                                            <Text>&nbsp;{skill.name}</Text>
                                        </Flex>
                                        <Progress hasStripe value={skill.level} size="xs" colorScheme="purple" />
                                    </Box>
                                )
                            })}
                        </VStack>
                    </TabPanel>
                    
                    <TabPanel>
                        <VStack align='stretch' spacing={6}>
                            {BackEndData.map((skill) => {
                                return (
                                    <Box key={skill}>
                                        <Flex alignItems="center" mb="2px">
                                            {skill.icon}
                                            <Text>&nbsp;{skill.name}</Text>
                                        </Flex>
                                        <Progress hasStripe value={skill.level} size="xs" colorScheme="purple" />
                                    </Box>
                                )
                            })}
                        </VStack>
                    </TabPanel>

                    <TabPanel>
                        <VStack align='stretch' spacing={6}>
                            {WorkflowData.map((skill) => {
                                return (
                                    <Box key={skill}>
                                        <Flex alignItems="center" mb="2px">
                                            {skill.icon}
                                            <Text>&nbsp;{skill.name}</Text>
                                        </Flex>
                                        <Progress hasStripe value={skill.level} size="xs" colorScheme="purple" />
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