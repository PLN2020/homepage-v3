import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Center, HStack, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaCamera } from 'react-icons/fa'

const Lightbox = ({ src, alt, city, year, camera, extLink, extLinkText, closeText }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Image
                src={src}
                alt={alt}
                objectFit="cover"
                objectPosition="center"
                display="block"
                h="100%"
                w="100%"
                transition="all 200ms ease-out"
                _hover={{ transform: 'scale(1.2)' }}
                placeholder="blur"
                onClick={onOpen}
            />
            
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                size={{base:"xl", md: "sm", lg: "xl"}}
            >
                <ModalOverlay />
                <ModalContent 
                    bg={useColorModeValue('shironeri', 'sumi')}
                    borderRadius="0"
                    border="1px solid"
                >
                    <ModalHeader>
                        {city} / {year}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' justifyContent='center'>
                        <Image 
                            src={src}
                            alt={alt}
                            maxH={{ base: "80vh", md: "60vh", lg: "80vh" }}
                        />
                    </ModalBody>
                    <ModalFooter justifyContent="space-around">
                        <Center fontSize={{ base: "xs", lg: "md" }}>
                            <FaCamera />
                            <Text>
                                &nbsp;{camera}
                            </Text>
                        </Center>
                        <HStack spacing={4}>
                            <Button
                                as={Link}
                                href={extLink}
                                target="_blank"
                                rightIcon={<ExternalLinkIcon />}
                                borderRadius={0}
                                borderColor={useColorModeValue('sumi', 'shironeri')}
                                variant="outline"
                            >
                                {extLinkText}
                            </Button>

                            <Button 
                                onClick={onClose}
                                borderRadius={0}
                                borderColor={useColorModeValue('sumi', 'shironeri')}
                                variant="outline"
                            >
                                {closeText}
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Lightbox