/* eslint-disable react/prop-types */
// components/Banner.js
import { Box, Text } from '@chakra-ui/react';
import banner from "../assets/charts_2.jpg";


const Banner = ({ title, subtitle }) => (
  <Box 
    mb={4} 
    position="relative" 
    height="350px" 
    background={`url(${banner}) center/cover no-repeat`}
    _after={{
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      bg: 'rgba(0, 0, 0, 0.5)'
    }}
  >
    <Box 
      position="absolute" 
      top="50%" 
      left="50%" 
      transform="translate(-50%, -50%)" 
      textAlign="center"
      color="white"
    >
      <Text fontSize="4xl" fontWeight="bold">{title}</Text>
      <Text fontSize="xl">{subtitle}</Text>
    </Box>
  </Box>
);

export default Banner;
