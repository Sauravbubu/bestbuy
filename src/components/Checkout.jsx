import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Payement } from "./Payement";
export function Checkout() {

    const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(30deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      {/* <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        bg="yellow.400"
      >
        Chekout
      </Button> */}
      <Button
        ml='4'
        bg="yellow.400"
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        Chekout
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl isRequired>
  <FormLabel>full name</FormLabel>
  <Input  placeholder='Full name' />
  <FormLabel>street & locality</FormLabel>
  <Input placeholder='street name' />
  <FormLabel>Pincode</FormLabel>
  <Input onChange={handleInputChange} type={"number"} placeholder='postal pin' />
</FormControl>
          </ModalBody>
          <ModalFooter>

          {input?<Payement/>:null}
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
