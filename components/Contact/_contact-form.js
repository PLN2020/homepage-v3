import { Box, Divider, FormControl, FormLabel, Input, Text, Textarea, useColorModeValue, VStack, Button, Flex, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"
import { useState } from "react"

const ContactForm = ({ 
    preface, 
    nameText, 
    emailText, 
    messageText, 
    buttonText, 
    alertSuccessTitle, 
    alertSuccessDesc,
    alertErrorTitle,
    alertErrorDesc,
    buttonLoadingText
 }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [status, setStatus] = useState('')

    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {
            name,
            email,
            message
        }

        setSubmitted(true)

        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.status === 200) {
                setSubmitted(false)
                setName('')
                setEmail('')
                setMessage('')
                setStatus('success')
            }
            else {
                setStatus('error')
            }
        })
    }

    return (
        <form action='submit' method='POST' onSubmit={handleOnSubmit}>
            <VStack align="left" spacing="1rem">
                <Box>
                    <Text fontSize="sm">{preface}</Text>
                </Box>

                <Divider borderColor={useColorModeValue('fujimurasaki', 'shion')} />
                
                <FormControl id="name" isRequired>
                    <FormLabel>{nameText}</FormLabel>
                    <Input 
                        type='text'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        borderRadius='none' 
                        borderColor={useColorModeValue('sumi', 'shironeri')} 
                        placeholder={nameText}
                    />
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>{emailText}</FormLabel>
                    <Input 
                        type='email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        borderRadius='none' 
                        borderColor={useColorModeValue('sumi', 'shironeri')}
                        placeholder={emailText}
                    />
                </FormControl>

                <FormControl id="text" isRequired>
                    <FormLabel>{messageText}</FormLabel>
                    <Textarea 
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        borderRadius='none' 
                        borderColor={useColorModeValue('sumi', 'shironeri')} 
                        placeholder={messageText}
                        minH='10vh'
                        maxH='15vh'
                    />
                </FormControl>

                <Box>
                    <Button
                        type="submit"
                        isLoading={submitted}
                        loadingText={buttonLoadingText}
                        borderRadius="none"
                        borderColor={useColorModeValue('sumi', 'shironeri')}
                        variant="outline"
                    >
                        {buttonText}
                    </Button>
                </Box>

                <Flex>
                    {status === "success" ?
                        <Alert status="success">
                            <AlertIcon />
                            <AlertTitle mr={2}>{alertSuccessTitle}</AlertTitle>
                            <AlertDescription>{alertSuccessDesc}</AlertDescription>
                        </Alert>
                        : status === "error" ?
                            <Alert status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>{alertErrorTitle}</AlertTitle>
                                <AlertDescription>{alertErrorDesc}</AlertDescription>
                            </Alert>
                        : null
                    }
                </Flex>
            </VStack>
        </form>
    )
}

export default ContactForm