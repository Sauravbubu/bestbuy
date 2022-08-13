import React from 'react'
import {Box, Button, Flex, Grid, GridItem, Heading, Link} from '@chakra-ui/react'
import PopularPics from './PopularPics'
import outletDeal from "../images/outletDeal.png"
import deals from "../images/deals.png"
import { Show, Hide } from '@chakra-ui/react'

const Banner = () => {
  return (
    <>
    <Box bg="#f0f2f4" h="800px" >
    <Grid
  h='650px'
  m="25px"
  w="100%"
  templateColumns='repeat(4, 1fr)'
 
  gap={4}
>
<Box mt="20px" objectFit="cover" h={["282px","420px","750px"]} w={["276px","350px","648px"]} bgImage="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-567346-chromebook-d28b3d73-35db-4d9e-ae33-250c620332a9.jpg">
    <Box mt="30px" w="30%" ml="20px">
    <Heading color="white" size="2xl">Save up to $300</Heading>
    <Heading color="white" size="xs" mt="10px">on select CromeBooks.</Heading>
    <Heading color="white" size="xs" mt="10px">Minimum savings is $30.</Heading>
    <Button mt="20px" size='sm' colorScheme='whiteAlpha' variant='solid'>Shop Now</Button>
    </Box>
    </Box>
    
<Show above='sm'>
<Box mt="20px" h="340px" w={["360px","350px","648px"]} bg="white">
<Box >
<Heading size='md' ml="10px" mt="20px">Today's popular picks</Heading>
</Box>
<Flex ml="20px" >

<PopularPics img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=640;maxWidth=550"
 name="Apple - AirPods Pro (with Magsafe Case)" />
 <PopularPics img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401735_sd.jpg;maxHeight=640;maxWidth=550"
 name="Samsung - 55 Class-7 Series LED-4K-UHD" />
 <PopularPics img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=640;maxWidth=550"
 name="Apple - 10.2-Inch iPad (Latest Model) Wi-Fi" />
 <PopularPics img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=640;maxWidth=550"
 name="MacBook Air 13.3 Laptop- Apple M1 chip" />
 </Flex>
 
</Box>
</Show>
<Hide below='md'>
<Box mt="360px" ml="-640px" w="300px" bg="white">
    <img src={outletDeal} alt="" />
    <Link ml="20px" color="blue">View outlet deals</Link>
</Box>
<Box mt="360px" ml="-330px" w="300px" bg="white">
    <img src={deals} alt="" />
    <Link ml="20px" color="blue">See bonus deals</Link>
</Box>
  </Hide>
</Grid>
    </Box>
    </>
  )
}

export default Banner