import {FaLinkedin,FaGithub} from "react-icons/fa";
import { chakra, Flex, Icon, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      w="full"
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
      >
        <chakra.a
          href="#"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          _dark={{
            color: "white",
            _hover: {
              color: "gray.300",
            },
          }}
          _hover={{
            color:"gray.700",
          }}
        >
          Morena
        </chakra.a>

        <chakra.p
          py={{ base: "2", sm: "0" }}
          color="gray.800"
          _dark={{ color: "white" }}
        >
          Made with love 🖤
        </chakra.p>

        <Flex mx="-2">
          <chakra.a
            href="https://www.linkedin.com/in/bwooo/"
            target="_blank"
            m={2}
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Linkedin"
          >
            <Icon as={FaLinkedin} boxSize="5" viewBox="0 0 24 24" fill="currentColor"/>
          </chakra.a>

          <chakra.a
            href="https://github.com/anothermorena/Medical-Insurance-Cost-Prediction"
            target="_blank"
            m={2}
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Github"
          >
            <Icon as={FaGithub} boxSize="5"  viewBox="0 0 24 24" fill="currentColor" />

          </chakra.a>
        </Flex>
      </Flex>
    </Flex>
  );
}


export default Footer;