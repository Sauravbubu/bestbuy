import React, { useContext } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Hide,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Show,
  Text,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  Search2Icon,
  ChevronDownIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import NorthAnchorage from "../images/NorthAnchorage.png";
// 1. Import
import { Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

const NavBar = () => {
  const { arr } = useContext(CartContext);
  // console.log(arr.length);
  return (
    <>
      <Flex
        bg="#0046bf"
        alignItems="center"
        // p="1rem"

        gap="1rem"
        w={["100%","100%","100%"]}
        h="80px"
      >
        <Box h="100%" w="15%" display={"flex"} justifyContent="center" alignItems="center">
          <Link to="/">
            <Text fontFamily={"cursive"} size={"3xl"} w="100%" fontWeight="bold" color="#ffffff">lexBuy.com</Text>
          </Link>
        </Box>
        <Box>
          <Popover>
            <PopoverTrigger>
              <Button
                colorScheme="white"
                variant="link"
                bg="#0046bf"
                fontSize="25px"
                fontWeight="20px"
                color="white"
              >
                <HamburgerIcon />
                <Show above="md">Menu</Show>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
             <Link to="/DealsofDay"><PopoverHeader color="blue">Deals </PopoverHeader></Link> 
             <Link to="/DealsofDay"> <PopoverHeader color="blue">Support & Services </PopoverHeader></Link>
             <Link to="/DealsofDay"> <PopoverHeader color="blue"> Brands</PopoverHeader></Link>
             <Link to="/DealsofDay"><PopoverHeader color="blue">Featured </PopoverHeader></Link>

              <Divider h="0.4rem" bg="lightgray" orientation="horizontal" />
              <PopoverHeader> Shop By Department </PopoverHeader>
              <PopoverBody color="blue">Appliances</PopoverBody>
              <PopoverBody color="blue">Movies & Music</PopoverBody>
              <PopoverBody color="blue">Computers & Tablets</PopoverBody>
              <PopoverBody color="blue">TV & Home Theater</PopoverBody>
              <PopoverBody color="blue">
                Cameras, Camcorders & Drones
              </PopoverBody>
              <PopoverBody color="blue">Cell Phones</PopoverBody>
              <PopoverBody color="blue"> Audio</PopoverBody>
              <PopoverBody color="blue">Video Games</PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Box m="1" w="500px">
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon />}
            />
            <Input type="tel" placeholder="Search Best Buy" bg="white" />
          </InputGroup>
        </Box>
        <Box ml="150px">
          <img src={NorthAnchorage} alt="" />
        </Box>
        <Link to="/Cart">
          <Box color="white" fontSize="20px">
            <Heading size="lg" fontSize="20px">
              <Icon as={AiOutlineShoppingCart} w={30} h={30} pt="0.2rem" />
              <Text
                m="-10px"
                p="2px"
                mr="10px"
                borderRadius="40%"
                color="black"
                bg="yellow"
                as="sub"
              >
                {arr.length}
              </Text>
              Cart
            </Heading>
          </Box>
        </Link>
      </Flex>
      <Flex
        bg="#0046bf"
        alignItems="center"
        justifyContent="space-evenly"
        // p="1rem"
        mt="1px"
        gap="1rem"
        w="100%"
        h="40px"
      >
        <Box fontSize="sm">
          <Popover>
            <PopoverTrigger>
              <Button
                color="white"
                bg="#0046bf"
                colorScheme="white"
                variant="link"
              >
                Back to School <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader color="blue">Back-To-School Deals</PopoverHeader>
              <PopoverHeader color="blue">Colleges Resources</PopoverHeader>
              <PopoverHeader color="blue">K-12 Tech</PopoverHeader>
              <PopoverHeader color="blue">
                Back-To-School Checklist
              </PopoverHeader>
              <PopoverBody color="blue">
                Close
                <PopoverCloseButton />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Link to="/DealsofDay">
          <Box color="white" fontSize="sm">
            Top Deals{" "}
          </Box>
        </Link>
        <Link to="/DealsofDay">
          <Box color="white" fontSize="sm">
            Deals of the Day{" "}
          </Box>
        </Link>
        <Link to="/DealsofDay">
          <Box color="white" fontSize="sm">
            Totaltech Membership{" "}
          </Box>
        </Link>
        <Link to="/DealsofDay">
          <Box color="white" fontSize="sm">
            Credits Cards{" "}
          </Box>
        </Link>
        <Link to="/DealsofDay">
          <Box color="white" fontSize="sm">
            Gifts Cards{" "}
          </Box>
        </Link>

        <Box color="white" fontSize="sm">
          <Popover>
            <PopoverTrigger>
              <Button
                color="white"
                bg="#0046bf"
                colorScheme="white"
                variant="link"
              >
                More <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader color="blue">Health & Wellness</PopoverHeader>
              <PopoverHeader color="blue">Best Buy Outlet</PopoverHeader>
              <PopoverHeader color="blue">Best Buy Business</PopoverHeader>
              <PopoverBody color="blue">
                Close
                <PopoverCloseButton value="bottom-start" />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Box color="white" fontSize="sm">
          <Icon as={VscAccount} /> Account <ChevronDownIcon />
        </Box>
        <Box color="white" fontSize="sm">
          Recently Viwed <ChevronDownIcon />
        </Box>
        <Box color="white" fontSize="sm">
          Order Status <ChevronDownIcon />
        </Box>
        <Box color="white" fontSize="sm">
          Saved Items <ChevronDownIcon />
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
