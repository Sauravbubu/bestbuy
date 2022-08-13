import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../components/Context/CartContext";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BsShieldCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
const AdditionalInsuranxe = () => {
  return (
    <Box h="80px" ml="20%">
      <Heading fontSize="sm">Protected plans</Heading>
      <Divider />
      <Flex p="10px">
        <Box ml="5%">
          <Icon as={BsShieldCheck} />
        </Box>

        <Box ml="10%">
          <Link color="blue" fontSize="xs">
            2-Year Accidental Geek Squad Replacement
          </Link>
          <Box>
            <Text color="blue" fontSize="xs">
              <StarIcon color="#ffe000" />
              <StarIcon color="#ffe000" />
              <StarIcon color="#ffe000" />
              <StarIcon color="#ffe000" />
              <StarIcon color="#ffe000" />
              (324)
            </Text>
          </Box>
        </Box>
        <Heading fontSize="sm" ml="10%">
          $9.99
        </Heading>
        <Button ml="10%" colorScheme="blue" variant="outline">
          <Icon as={AiOutlineShoppingCart} w="30px" h="30px" pt="0.2rem" />
          Add to Cart
        </Button>
      </Flex>
    </Box>
  );
};

export default AdditionalInsuranxe;
