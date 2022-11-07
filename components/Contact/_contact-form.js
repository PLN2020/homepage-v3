import { Box, Divider, FormControl, FormLabel, Input, Text, Textarea, useColorModeValue, VStack } from "@chakra-ui/react"

const ContactForm = () => {
    return (
        <VStack align="left">
            <Box>
                <Text>Currently accepting freelance opportunities. Open to web developer roles.</Text>
            </Box>

            <Divider borderColor={useColorModeValue('fujimurasaki', 'shion')} />

            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input 
                    type='name' 
                    borderRadius='none' 
                    borderColor={useColorModeValue('sumi', 'shironeri')} 
                    placeholder='Name'
                />
            </FormControl>

            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input 
                    type='email' 
                    borderRadius='none' 
                    borderColor={useColorModeValue('sumi', 'shironeri')}
                    placeholder='Email'
                />
            </FormControl>

            <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea 
                    type='message'
                    borderRadius='none' 
                    borderColor={useColorModeValue('sumi', 'shironeri')} 
                    placeholder='Message'
                    minH='10vh'
                    maxH='15vh'
                />
            </FormControl>
        </VStack>
    )
}

export default ContactForm