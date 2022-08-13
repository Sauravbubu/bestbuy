import React, { useState } from "react";
import {Checkout} from '../components/Checkout'
import { CartContext } from "../components/Context/CartContext";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const OrderSummery = ({maxTotal,totalSaving,finalCheckOutPrice}) => {
    
let dollarUSLocale = Intl.NumberFormat('en-US');
let dollarIndianLocale = Intl.NumberFormat('en-IN');
  return (
    <Box h="650px" w="30%" bg="white">
      <Stack p="2rem" lineHeight="15px">
        <Heading textAlign="center" fontSize="xl">
          Order Summary
        </Heading>
        <Divider border="1px" />
        <Flex justifyContent="space-between">
          <Text fontSize="sm">Original Price</Text>
          <Text fontSize="sm">${dollarUSLocale.format(maxTotal)}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="sm">Savings</Text>
          <Text fontSize="sm">${totalSaving}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="sm">Shoping</Text>
          <Text fontSize="sm">0</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="sm">Store Pickup</Text>
          <Text fontSize="sm">0</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Link fontSize="sm" color="blue">
            Estimated Sales Tax
          </Link>
          <Text fontSize="sm">0</Text>
        </Flex>
        <Divider border="1px" />
        <Flex justifyContent="space-between">
          <Heading fontSize="lg">Total</Heading>
          <Text fontSize="sm">${finalCheckOutPrice}</Text>
        </Flex>
       <Checkout/>
        <Button colorScheme="facebook" color="white" variant="solid">
          PayPal <Text as="sup">Checkout</Text>
        </Button>
        <Text fontSize="sm">
          <Link color="blue">Sign in or create an account now </Link> to get My
          Best Buy™ Points
        </Text>
        <Divider border="1px" />
        <Flex>
          <Box fontSize="sm" pt="20px">
            <Image
              src="https://www.bestbuy.com/~assets/bby/_com/MBBCC_MBBVC_Contactless_Dual_Yellow_Edge_RGB-a32c353844fb660dd08157fcccf95d42.png"
              h="40%"
            ></Image>
            <Text mt="20px">
              <Link color="blue">Show me how </Link>
            </Text>
          </Box>
          <Box pt="20px">
            <Heading fontSize="lg">10% back in rewards</Heading>
            <Text fontSize="x-small">
              on first day of purchases or flexible financing for new My Best
              Buy® Credit Cardmembers.
            </Text>
          </Box>
        </Flex>
        <Divider border="1px" />
        <Box pt="20px" pb="20px">
          <Heading fontSize="lg">Looking for a lease to own option?</Heading>
          <Text fontSize="sm" pt="10px">
            Enjoy the tech you want today. <Link color="blue">Learn more </Link>
          </Text>
        </Box>
        <Divider border="1px" />
      </Stack>
    </Box>
  );
};

export default OrderSummery;
