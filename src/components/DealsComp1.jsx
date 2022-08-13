import { StarIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  Image,
  Highlight,
  Button,
  Icon,
  Divider,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Timer1 from "../components/Timer1";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Product from "../components/Product";
import { data } from "../Data/Data";
import Footer from "../components/Footer";

const DealsComp1 = () => {
  return (
   
    <Box w="50%" mt="40px" lineHeight={[ "10px","20px","180%"]}>
    <Link fontSize="lg" color="blue" fontWeight="10px">
      Acer - Chromebook 315-15.6 HD Laptop- Intel Celeron N4000 - 4GB
      LPDDR4- 32GB eMMC
    </Link>
    <Text color="blue">
      <StarIcon color="#ffe000" />
      <StarIcon color="#ffe000" />
      <StarIcon color="#ffe000" />
      <StarIcon color="#ffe000" />
      (65)
    </Text>
    <Heading size="xs" color="green">
      Get it today
    </Heading>
    <Text fontSize="0.8rem">
      <Highlight query="Pickup" styles={{ fontWeight: "bold" }}>
        Pickup
      </Highlight>
      :Available today at North Anchorage
    </Text>
    <Link fontSize="0.8rem" color="blue">
      See all pickup locations
    </Link>
    <Text fontSize="0.8rem">
      <Highlight query="Shipping" styles={{ fontWeight: "bold" }}>
        Shipping
      </Highlight>
      :Unavailable in your area
    </Text>
    <Text fontSize="0.8rem">
      This item is only available in certain markets.
    </Text>
    <Link fontSize="0.8rem" color="blue">
      Estimates for 96939
    </Link>
    <Heading size="lg">$109.00</Heading>
    <Text>
      <Highlight
        query="Save $140"
        styles={{ bg: "red", color: "white", fontWeight: "bold" }}
      >
        Save $140
      </Highlight>{" "}
      Was $249.00
    </Text>
    <Text fontSize="0.8rem">
      <TimeIcon /> Deal ends in <Timer1 />
    </Text>
    <Heading fontSize="0.8rem">
      Free 6-month security software &{" "}
      <Link color="blue">1 more $29.99 value</Link>
    </Heading>
    <Text></Text>
    {/* <Button
      mt="10px"
      size="sm"
      varient="solid"
      colorScheme="yellow"
      bg="#ffe000"
      leftIcon={
        <Icon as={AiOutlineShoppingCart} w={30} h={30} pt="0.2rem" />
      }
    >
      Add to Cart
    </Button> */}
  </Box>
  )
}

export default DealsComp1