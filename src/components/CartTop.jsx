import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { CartContext } from "../components/Context/CartContext";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
const CartTop = () => {
  return (
    <Flex ml="10rem" mr="8rem" pt="0.5rem">
      <Image
        src="https://www.bestbuy.com/~assets/bby/_com/updated-microsoft-image-ea7d2787f444188a223e599cf09fc63b.jpg"
        h="60px"
      ></Image>
      <Box lineHeight="0.9rem" ml="1rem">
        <Heading fontSize="2xl">Save on Microsoft 365 with your device</Heading>
        <Text fontSize="sm">
          Includes Office apps, 1TB of cloud storage and more
        </Text>
        <Text ml="2rem" fontSize="xs">
          Auto-renews annually after 15 months at then-current price.
        </Text>
      </Box>
      <Menu>
        <MenuButton
          bg="white"
          mt="0.5rem"
          ml="20px"
          border="2px"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          1 Person - PC/Mac - $69.99/yr
        </MenuButton>
        <MenuList>
          <MenuItem>1 Person - PC/Mac - $69.99/yr</MenuItem>
          <MenuItem>6 Person - PC/Mac - $99.99/yr</MenuItem>
        </MenuList>
      </Menu>
      <Button mt="0.5rem" ml="20px" p="20px" colorScheme="teal" variant="solid">
        Add to Cart
      </Button>
    </Flex>
  );
};

export default CartTop;
