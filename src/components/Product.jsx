import { StarIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Highlight,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Timer1 from "./Timer1";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import CompExample from "./Alert";

const Product = ({
  id,
  img,
  title,
  reviews,
  discountedPrice,
  mainPrice,
  off,
  obj,
}) => {

  const {changeArr} = useContext(CartContext);
  function addtocart(obj) {
    // changeArr(obj);
  }
  return (
    <>
      <Box
        key={id}
        h={["400px", "500px", "600px"]}
        w="100%"
        alignItems={"center"}
        display={"flex"}
        flexDir="column"
        justifyContent={"space-between"}
        boxShadow={"base"}
        p="20px"
      >
        <Box w="80%" h="40%">
          <Image
            objectFit={"contain"}
            src={img}
            p="20px"
            pl="20px"
            w="100%"
            h="100%"
          ></Image>
        </Box>
        <Link fontSize={["5px", "10px", "15px"]} color="blue" fontWeight="10px">
          {title}
        </Link>
        <Text color="blue" mt={["0", "15px", "20px"]}>
          <StarIcon color="#ffe000" />
          <StarIcon color="#ffe000" />
          <StarIcon color="#ffe000" />
          <StarIcon color="#ffe000" />({reviews})
        </Text>
        <Heading size={["s", "m", "lg"]} mt="10px" mb="10px">
          ${discountedPrice}
        </Heading>
        <Text fontSize={["xs", "m", "lg"]}>
          <Highlight
            query="Save $140"
            styles={{ bg: "red", color: "white", fontWeight: "bold" }}
          >
            Save $140
          </Highlight>
          ${mainPrice}
        </Text>
        <Text fontSize="0.8rem">
          <TimeIcon /> Deal ends in <Timer1 />
        </Text>
       

        <Button onClick={addtocart} mt={["5px","10px","20px"]}  varient="solid">
          <CompExample obj={obj}/>
        </Button>
      </Box>
    </>
  );
};

export default Product;
