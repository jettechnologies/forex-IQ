import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Navbar from './Navbar'; // Adjust the import path according to your project structure

const Hero = () => {
  return (
    <Box height="100dvh" position="relative" zIndex={2}>
      <Navbar />
      <Box
        bgImage="url('/src/assets/hero.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="calc(100dvh - 4rem)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bg: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
        px={8}
      >
        <Box position="relative" zIndex={2} color={"#f4f4f4"}>
          <Heading fontSize="4xl" mb={4}>Unlock Your Financial Freedom</Heading>
          <Text fontSize="xl" mb={8}>Start your trading journey today with no upfront costs and unlimited benefits.</Text>
          <Button colorScheme="teal" size="lg" width="20rem">Start Trading Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
