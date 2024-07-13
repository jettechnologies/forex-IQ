import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {

    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Flex as="main" direction="column" flex="1" minH="100vh" fontFamily="Roboto, sans-serif">
        <Box flex="1">
          <Outlet />
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
