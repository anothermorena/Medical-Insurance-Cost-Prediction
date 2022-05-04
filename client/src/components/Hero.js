import Form from "./Form";
import SideImage from "../micp.jpg";
import { Box, useColorModeValue, Icon, Image,Text} from "@chakra-ui/react";

const Hero = () => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={10}>
      <Box maxW="7xl" mx="auto">
        <Box pos="relative" pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }} maxW={{ lg: "2xl" }} w={{ lg: "full" }} zIndex={1} bg={bg} border="solid 1px transparent">
          <Icon display={{ base: "none", lg: "block" }} position="absolute" right={0} top={0} bottom={0} h="full" w={48} color={bg} transform="translateX(50%)" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>

          <Box mx="auto" maxW={{ base: "7xl" }} px={{ base: 4, sm: 6, lg: 8 }} mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}>
            <Box w="full" textAlign={{ sm: "center", lg: "left" }} justifyContent="center" alignItems="center">
                <Form />
            </Box>
          </Box>

        </Box>
      </Box>

      <Box position={{ lg: "absolute" }} top={{ lg: 0 }} bottom={{ lg: 0 }} right={{ lg: 0 }} w={{ lg: "50%" }} border="solid 1px transparent">
        <Image h={[56, 72, 96, "full"]} w="full" fit="cover" src={SideImage} alt="" loading="lazy"/>
      </Box>

    </Box>
  );
};

export default Hero;