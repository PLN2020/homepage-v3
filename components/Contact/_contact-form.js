import { Box, Divider, FormControl, FormLabel, Input, Text, Textarea, useColorModeValue, VStack, Button } from "@chakra-ui/react"

const ContactForm = ({ status, name, email, message, button }) => {
    return (
        <VStack align="left" spacing="1rem">
            <Box>
                <Text>{status}</Text>
            </Box>

            <Divider borderColor={useColorModeValue('fujimurasaki', 'shion')} />

            <FormControl>
                <FormLabel>{name}</FormLabel>
                <Input 
                    type='name' 
                    borderRadius='none' 
                    borderColor={useColorModeValue('sumi', 'shironeri')} 
                    placeholder={name}
                />
            </FormControl>

            <FormControl>
                <FormLabel>{email}</FormLabel>
                <Input 
                    type='email' 
                    borderRadius='none' 
                    borderColor={useColorModeValue('sumi', 'shironeri')}
                    placeholder={email}
                />
            </FormControl>

            <FormControl>
                <FormLabel>{message}</FormLabel>
                <Textarea 
                    type='message'
                    borderRadius='none' 
                    borderColor={useColorModeValue('sumi', 'shironeri')} 
                    placeholder={message}
                    minH='10vh'
                    maxH='15vh'
                />
            </FormControl>
            
            <Box>
                <Button
                    borderRadius="none"
                    borderColor={useColorModeValue('sumi', 'shironeri')}
                    variant="outline"
                >
                    {button}
                </Button>
            </Box>
        </VStack>
    )
}

export default ContactForm