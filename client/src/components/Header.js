import { FaMoon, FaSun } from "react-icons/fa";
import { useViewportScroll } from "framer-motion";
import {useEffect, useState, useRef} from "react";
import {chakra,HStack,Flex,IconButton,useColorModeValue,useColorMode,Text} from "@chakra-ui/react";

const Header = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const ref = useRef();
  const [y, setY] = useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  
  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "sm" : undefined}
      transition="box-shadow 0.2s"
      bg={bg}
      borderTop="6px solid"
      borderTopColor="brand.400"
      w="full"
      overflowY="hidden"
      borderBottomWidth={2}
      borderBottomColor={useColorModeValue("gray.200", "gray.900")}
    >
      <chakra.div h="4.5rem" mx="auto" maxW="1200px">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >

          <Flex align="center">
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
            <Text fontSize='4xl' color="gray.400">Medical Insurance Cost Prediction</Text>
            </HStack>
          </Flex>
          <Flex justify="flex-end" align="center" color="gray.400">
            <Text color="gray.400"  display={{ base: "flex", md: "none" }}>Medical Insurance Cost Prediction</Text>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  );
}

export default Header;