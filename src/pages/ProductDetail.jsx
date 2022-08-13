import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import {data} from '../Data/Data'
const ProductDetail = ({ id }) => {
let sdata=data.filter((el,i)=>el.id==id)
  return (
    <>
      <NavBar />
      <Heading w="50%">This Page is under Construction : Go to Deals page and other pages to add to cart  </Heading>
      <Box display={"grid"} gap="1rem">
        <Flex
          flexDir="column"
          h="900px"
          w="60%"
          pt="2rem"
          alignItems={"center"}
        >
          <Flex
            flexDir="column"
            w="90%"
            h="60%"
            justifyContent={"left"}
            textAlign="left"
            alignItems={"flex-start"}
            position={"sticky"}
          >
            <Text fontSize={["m", "lg", "xl"]}>
              {
                "MacBook Pro 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray"
              }
            </Text>
            <Flex
              justifyContent={"center"}
              textAlign="left"
              alignItems={"center"}
              w="100%"
            >
              <Image
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601cv11d.jpg;maxHeight=640;maxWidth=550"
                w="100%%"
                h="100%"
                pt="2rem"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex></Flex>
      </Box>
    </>
  );
};

export default ProductDetail;
