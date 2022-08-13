import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Timer1 from './Timer1'

const Timer = () => {
  return (
   
    <Box
    mt="10px"
    bg="white"
    w="200px"
    h="80px"
    borderRadius="0.2rem"
    ml="30%"
    p="10px"
    pl="20px"
  >
    <Heading fontWeight="10px">
      <Timer1 />
    </Heading>
    <Text size="xs">hours minutes seconds</Text>
  </Box>
  )
}

export default Timer