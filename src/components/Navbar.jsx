import { useState } from 'react';
import { Box, Flex, Button, Link, IconButton, useBreakpointValue, keyframes, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from  "../assets/logo.png"

const Navbar = () => {
  // Keyframes for glowing border effect
  const glow = keyframes`
    0% { box-shadow: 0 0 5px teal; }
    50% { box-shadow: 0 0 20px blue; }
    100% { box-shadow: 0 0 5px teal; }
  `;

  // Responsive width for buttons
  const buttonWidth = useBreakpointValue({ base: "100%", md: "8rem" });

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box bg="black" color="white" px="2rem" h="4rem">
      <Flex h="100%" alignItems="center" justifyContent="space-between" paddingY={4}>
        <Box>
          <Image src={Logo} alt="Logo" height="5rem" />
        </Box>
        <Flex display={{ base: "none", md: "flex" }} alignItems="center" justifyContent="space-between" width="65vw">
          <Box>
            <Link href="/" px={2} py={2} mr={4}>Home</Link>
            <Link href="#about-us" px={2} py={2} mr={4}>About Us</Link>
            <Link href="#features" display="block" py={2}>Features</Link>
            <Link href="#contact-us" px={2} py={2}>Contact Us</Link>
          </Box>
          <Box>
            <Button
              variant="outline"
              border="1px solid"
              borderColor="teal"
              colorScheme="teal"
              mr={4}
              bg="transparent"
              animation={`${glow} 2s infinite`}
              width={buttonWidth}
              my={2}
            >
              Login
            </Button>
            <Button
              colorScheme="teal"
              width={buttonWidth}
              my={2}
            >
              Sign Up
            </Button>
          </Box>
        </Flex>
        <IconButton
          aria-label="Toggle Menu"
          icon={isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={toggleMobileMenu}
        />
      </Flex>
      {isMobileMenuOpen && (
        <Box width="100%" height="100vh" display={{ base: "block", md: "none" }} bg="white" zIndex={999} color="black" p={4} mt={4} borderRadius={4}>
          <Link href="/" display="block" py={2}>Home</Link>
          <Link href="#about-us" display="block" py={2}>About Us</Link>
          <Link href="#features" display="block" py={2}>Features</Link>
          <Link href="#contact-us" display="block" py={2}>Contact Us</Link>
          <Button
            variant="outline"
            border="1px solid"
            borderColor="teal"
            colorScheme="teal"
            bg="transparent"
            animation={`${glow} 2s infinite`}
            width="100%"
            my={2}
          >
            Login
          </Button>
          <Button
            colorScheme="teal"
            width="100%"
            my={2}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
