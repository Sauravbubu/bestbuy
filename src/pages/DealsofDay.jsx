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
import DealsComp1 from "../components/DealsComp1";
import Timer from "../components/Timer";
import DealText from "../components/DealText";

const DealsofDay = () => {
  const [datas, setDatas] = useState(data);
  return (
    <>
      <NavBar />
      <Box h="140px" bg="#0046bf" mt="50px">
       <DealText/>
      </Box>
      <Flex h="500px" mt="50px">
        <Box w="40%" m="40px">
          <Image
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505902_sd.jpg;maxHeight=640;maxWidth=550"
            h="60%"
            pl="20%"
          ></Image>
        </Box>
       <DealsComp1/>
      </Flex>
      <Box p="20px">
        <Divider orientation="horizontal" />
      </Box>
      <Heading mt="-20" ml="20px" size="md">
        Bonus Deals of the Day
      </Heading>
      <SimpleGrid columns={{sm: 2, md: 3 , lg:4}} gridTemplateRows="auto"  w="100%" ml="20px" mt="-20px"  mr="20px">
        {datas.map((item) => (
          <Product
            obj={item}
            key={item.id}
            img={item.img}
            title={item.title}
            rating={item.rating}
            reviews={item.reviews}
            discountedPrice={item.discountedPrice}
            mainPrice={item.mainPrice}
            off={item.off}
            
          />
        ))}
      </SimpleGrid>
      <Footer />
    </>
  );
};

export default DealsofDay;
