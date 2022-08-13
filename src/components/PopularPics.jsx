import { Box, Flex, Image } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'


const PopularPics = ( {img, name}) => {
  return (
    <Box>

<Flex flexDirection={"column"} justifyContent="space-between" w="100%" m="10px">
    <Box  maxWidth="100px" minHeight="100px">
    <Image src={img} objectFit="contain"  minWidth="100px" minHeight="100px" />
    </Box>
   <Box mt="15%">
   <Link to="/productdetail" color='teal.500' href='#' fontSize="md" lineHeight="1px" letterSpacing="1px">
    {name}
  </Link>
   </Box>
  </Flex>   


    </Box>
  )
}

export default PopularPics