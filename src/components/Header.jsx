import { Box, Flex, Button, Text, Heading } from '@chakra-ui/react';
import heroImage from "../assets/charts.jpg";

const Header = () => {

  return (
    <Box position="relative" minHeight="100vh" bg="black" color="white">
      <Box
        height="100vh"
        backgroundImage={`url(${heroImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.6)"
          zIndex={1}
        />
        <Flex
          height="100%"
          align="center"
          justify="center"
          px={8}
          py={4}
          zIndex={2}
          position="relative"
          textAlign="center"
        >
          <Box>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={4}>Unleash the power of AI Trading</Heading>
            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} mb={8} >THE FOREX IQ- YOUR TRUSTED PARTNER IN AUTOMATED TRADING</Text>
            <Button px={{ md: "4rem" }} bg="#011b3d" color="white" _focus={{ color: "black" }} size="lg" width={{ base: "100%", md: "auto" }}>Start Trading Now</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
