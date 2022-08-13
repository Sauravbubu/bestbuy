import { Box, Link, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const DeliveryOptions = () => {
  return (
    <Box>
                  <RadioGroup defaultValue="1">
                    <Stack>
                      <Radio value="1">
                        <Text  fontSize="xs">Pickup at North Anchorage</Text>
                        <Link fontSize="xs" color="blue">
                          Available Today at a store 6 miles away
                        </Link>
                      </Radio>
                      <Radio value="2">
                        <Text fontWeight="bold" fontSize="xs">
                          Shipping to 96939
                        </Text>
                        <Text fontSize="xs">Unavailable in this area</Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
  )
}

export default DeliveryOptions