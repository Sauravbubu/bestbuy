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
import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
export function Payement() {
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
      backdropInvert="0%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [input, setInput] = React.useState('')

const handleInputChange = (e) => setInput(e.target.value)

const isError = input === ''
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
        Complete Payment
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add Card Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl isRequired>
  <FormLabel>Credit Card Number</FormLabel>
  <Input type={"number"} placeholder='Card Number' />
  <FormLabel>CVV</FormLabel>
  <Input placeholder='CVV' type="number"/>


  <FormLabel>Expiry</FormLabel>
  <Input
     placeHolder="Select Date and Time"
     size="md"
     type="date"
    />

  <FormLabel>Pin</FormLabel>
  <Input onChange={handleInputChange} type={"number"} placeholder='OTP' />
</FormControl>
          </ModalBody>
          <ModalFooter>

          {input? <Button  bg="yellow.400" onClick={()=>{}}>Complete Order</Button>:null}
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
