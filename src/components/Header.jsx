// import { Box, Flex, Button, Text, Heading } from '@chakra-ui/react';
// import heroImage from "../assets/charts.jpg";

// const Header = () => {

//   return (
//     <Box position="relative" minHeight="100vh" bg="black" color="white">
//       <Box
//         height="100vh"
//         backgroundImage={`url(${heroImage})`}
//         backgroundSize="cover"
//         backgroundPosition="center"
//         position="relative"
//       >
//         <Box
//           position="absolute"
//           top="0"
//           left="0"
//           right="0"
//           bottom="0"
//           bg="rgba(0, 0, 0, 0.6)"
//           zIndex={1}
//         />
//         <Flex
//           height="100%"
//           align="center"
//           justify="center"
//           px={8}
//           py={4}
//           zIndex={2}
//           position="relative"
//           textAlign="center"
//         >
//           <Box>
//             <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={4}>Unleash the power of AI Trading</Heading>
//             <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} mb={8} >THE FOREX IQ- YOUR TRUSTED PARTNER IN AUTOMATED TRADING</Text>
//             <Button px={{ md: "4rem" }} bg="#011b3d" color="white" _focus={{ color: "black" }} size="lg" width={{ base: "100%", md: "auto" }}>Start Trading Now</Button>
//           </Box>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default Header;


import { Box, Flex, Button, Text, Heading, keyframes } from '@chakra-ui/react';
import heroImage from "../assets/charts.jpg";

const Header = () => {
  const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
  `;
  
  const blink = keyframes`
    0% { border-color: transparent }
    50% { border-color: white }
    100% { border-color: transparent }
  `;

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
          width = "100%"
          height="100%"
          align="center"
          justify="center"
          px={8}
          py={4}
          zIndex={2}
          position="relative"
          textAlign="center"
        >
          <Box width = {{base: "100%"}}>
            <Heading fontSize={{ base: "xl", md: "4xl", lg: "5xl" }} mb={4}>
              Unleash the power of AI Trading
            </Heading>
            <Text 
              fontSize={{ base: "md", md: "lg", lg: "xl" }} 
              mb={8}  
              overflow="hidden" 
              borderRight="0.15em solid white" 
              animation={`${typing} 3.5s steps(40, end) 1s, ${blink} 0.75s step-end infinite`}
            >
              THE FOREX IQ- YOUR TRUSTED PARTNER IN AUTOMATED TRADING
            </Text>
            <Button 
              px={{ md: "4rem" }} 
              bg="#011b3d" 
              color="white" 
              _focus={{ color: "black" }} 
              size="lg" 
              width={{ base: "100%", md: "auto" }}
            >
              Start Trading Now
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
