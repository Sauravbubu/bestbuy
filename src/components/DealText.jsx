import { Box, Flex, Heading, Highlight,Link } from '@chakra-ui/react'
import React from 'react'
import Timer from './Timer'


const DealText = () => {
  return (
    <Flex padding="20px">
    <Box color="white" lineHeight="3rem" ml="10%">
      <Heading>
        <Highlight query="Deal" styles={{ bg: "red", color: "white" }}>
          Deal
        </Highlight>{" "}
        of the Day.
      </Heading>
      <Heading as="h6" size="sm" fontWeight="1rem">
        Great new deals. Every day.
      </Heading>
      <Link color="yellow">See Deal of the Day FAQs</Link>
    </Box>
  <Timer/>
  </Flex>
  )
}

export default DealText