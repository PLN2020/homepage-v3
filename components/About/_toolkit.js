import { Box, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, VStack, Text, Flex } from "@chakra-ui/react"
import { FrontEndData, BackEndData, WorkflowData } from "./toolkit-data"

const Toolkit = ({ padding, heading, tabOne, tabTwo, tabThree, description }) => {
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
                        <VStack align='stretch' spacing={4}>
                            {FrontEndData.map((feSkill) => {
                                return (
                                    <Box key={feSkill}>
                                        <Flex alignItems="center" mb="2px" fontSize="md">
                                            {feSkill.icon}
                                            <Text>&nbsp;{feSkill.name}</Text>
                                        </Flex>
                                    </Box>
                                )
                            })}
                        </VStack>
                    </TabPanel>
                    
                    <TabPanel>
                        <VStack align='stretch' spacing={4}>
                            {BackEndData.map((beSkill) => {
                                return (
                                    <Box key={beSkill}>
                                        <Flex alignItems="center" mb="2px" fontSize="md">
                                            {beSkill.icon}
                                            <Text>&nbsp;{beSkill.name}</Text>
                                        </Flex>
                                    </Box>
                                )
                            })}
                        </VStack>
                    </TabPanel>

                    <TabPanel>
                        <VStack align='stretch' spacing={4}>
                            {WorkflowData.map((wfSkill) => {
                                return (
                                    <Box key={wfSkill}>
                                        <Flex alignItems="center" mb="2px" fontSize="md">
                                            {wfSkill.icon}
                                            <Text>&nbsp;{wfSkill.name}</Text>
                                        </Flex>
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