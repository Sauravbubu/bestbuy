import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { CartContext } from "../components/Context/CartContext";
import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import Timer1 from "../components/Timer1";
import Footer from "../components/Footer";
import CartTop from "../components/CartTop";
import OrderSummery from "../components/OrderSummery";
import DeliveryOptions from "../components/DeliveryOptions";

const Cart = () => {
  const { arr, removeItem, finalPrice, totalDiscount, ToalMRP, updateAmounts ,setqty} =
  useContext(CartContext);
  let handleRemove=(id)=> {
    removeItem(id);
  };
  let calc = (e, discountedPrice=2, mainPrice, off) => {
    
    // console.log(e, discountedPrice, mainPrice, off);
    updateAmounts(e,discountedPrice,mainPrice,off);
    // setqty(e)
  };

 
  // console.log(arr, "Cartpage");
  // console.log(finalPrice, totalDiscount, ToalMRP, "cart page"),
    // function handleRemove(id) {
    //   removeItem(id)
    // }
  return (
    <>
      <NavBar />
      <Box h="80px" bg="#f0f2f5">
        <CartTop />
      </Box>

      <Flex bg="#f0f2f5">
        <Box w="70%" m="40px" mt="20px" h="800px">
          {arr.map((item) => (
            <Box key={item.id} h="260px" mt="20px" bg="white" p="10px">
              <Text fontSize="0.8rem">
                <TimeIcon /> Deal ends in <Timer1 />
              </Text>
              <Flex pt="10px" h="150px">
                <Image src={item.img} h="40%" />
                <Box w="30%" ml="5%">
                  <Link color="blue" fontSize="xs">
                    {item.title}
                  </Link>
                </Box>
                <DeliveryOptions />
                <Stack ml="10%" w="10%" align="left">
                  <select
                    border="1px solid black"
                    placeholder=""
                    onChange={(e) => 
                      calc(
                        Number(e.target.value),
                        item.discountedPrice,
                        item.mainPrice,
                        item.off
                      )
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <Button
                    color="blue"
                    variant="link"
                    size="xs"
                    ml="10px"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                  <Button color="blue" variant="link" size="xs" ml="10px">
                    Save
                  </Button>
                </Stack>
                <Box ml="10%">
                  <Heading fontSize="l">${item.discountedPrice}</Heading>
                  <Text lineHeight="2rem" fontSize="sm" m="0.1rem">
                    <Highlight
                      query="Save %90"
                      styles={{ bg: "red", color: "white" }}
                    >
                      Save %90
                    </Highlight>
                  </Text>
                  <Text lineHeight="0.5rem" fontSize="sm" m="0.1rem">
                    Was{item.mainPrice}
                  </Text>
                </Box>
              </Flex>
              {/* {<AddionalInsurance/>} */}
            </Box>
          ))}
        </Box>
        <OrderSummery
          maxTotal={ToalMRP}
          totalSaving={totalDiscount}
          finalCheckOutPrice={finalPrice}
        />
        {/* //maxTotal,totalSaving,finalCheckOutPrice */}
      </Flex>
      <Footer />
    </>
  );
};

export default Cart;
