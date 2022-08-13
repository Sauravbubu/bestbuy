import {Text, Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, useDisclosure, Icon } from "@chakra-ui/react"
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "./Context/CartContext";

export default function CompExample({obj}) {
  const {changeArr} = useContext(CartContext);
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: false })
function handleClick(){
  changeArr(obj)
    onOpen()
    setTimeout(() => {
        onClose()
      }, 1000);
}
  
    return isVisible ? (
      <Alert status='success'>
        <AlertIcon />
        <Box >
         
          <AlertDescription >
            You Successfully Added to cart
          </AlertDescription>
        </Box>
        {/* <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        /> */}
      </Alert>
    ) : (
      <Button size={"xs"} p={["5px","10px","20px"]} bg="#ffe000"onClick={handleClick}> <Icon as={AiOutlineShoppingCart} w={30} h={30} pt="0.2rem" />Add to cart</Button>
    )
  }