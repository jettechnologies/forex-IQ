import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, useColorModeValue } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error: ${errorData.message}`);
      }

      const response = await res.json();
      console.log(response);
      setContactData({name: "", email: "", subject: "", message: ""})
    } catch (err) {
      console.log(err);
      setContactData({name: "", email: "", subject: "", message: ""})
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <Box id="contact-us" bg={"#011b3d"} py={{ base: 8, lg: 16 }} px={4} minHeight="calc(100vh + 4rem)">
      <Container maxW="screen.md" mx="auto">
        <Heading as="h2" size="2xl" mb={4} textAlign="center" fontWeight="extrabold" color={"white"}>
          Contact Us
        </Heading>
        <Text mb={{ base: 8, lg: 16 }} textAlign="center" fontWeight="light" color={useColorModeValue('gray.500', 'gray.400')} fontSize={{ base: 'md', sm: 'xl' }}>
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </Text>
        <Flex direction={{ base: 'column', lg: 'row' }} gap={8}>
          <Stack spacing={4} flex={1}>
            <Flex align="center" mb={4}>
              <FaMapMarkerAlt color={useColorModeValue('gray.900', 'white')} size={20} />
              <Text ml={2} color={"white"}>1234 Street Name, City, Country</Text>
            </Flex>
            <Flex align="center" mb={4}>
              <FaPhoneAlt color={useColorModeValue('gray.900', 'white')} size={20} />
              <Text ml={2} color={"white"}>+123 456 7890</Text>
            </Flex>
            <Flex align="center" mb={4}>
              <FaEnvelope color={useColorModeValue('gray.900', 'white')} size={20} />
              <Text ml={2} color={"white"}>info@example.com</Text>
            </Flex>
          </Stack>
          <Box flex={1}>
            <form onSubmit={handleFormSubmit}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor="name" color={"white"}>Name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={contactData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderColor={useColorModeValue('gray.300', 'gray.600')}
                    _placeholder={{ color: useColorModeValue('gray.400', 'gray.400') }}
                    _focus={{
                      ring: 'primary.500',
                      borderColor: 'primary.500'
                    }}
                    color="black"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email" color={"white"}>Your Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={contactData.email}
                    onChange={handleInputChange}
                    placeholder="name@flowbite.com"
                    required
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderColor={useColorModeValue('gray.300', 'gray.600')}
                    _placeholder={{ color: useColorModeValue('gray.400', 'gray.400') }}
                    _focus={{
                      ring: 'primary.500',
                      borderColor: 'primary.500'
                    }}
                    color = "black"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="subject" color={"white"}>Subject</FormLabel>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactData.subject}
                    onChange={handleInputChange}
                    placeholder="Let us know how we can help you"
                    required
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderColor={useColorModeValue('gray.300', 'gray.600')}
                    _placeholder={{ color: useColorModeValue('gray.400', 'gray.400') }}
                    _focus={{
                      ring: 'primary.500',
                      borderColor: 'primary.500'
                    }}
                    color = "black"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="message" color={"white"}>Your Message</FormLabel>
                  <Textarea
                    id="message"
                    rows={6}
                    name="message"
                    value={contactData.message}
                    onChange={handleInputChange}
                    placeholder="Leave a comment..."
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderColor={useColorModeValue('gray.300', 'gray.600')}
                    _placeholder={{ color: useColorModeValue('gray.400', 'gray.400') }}
                    _focus={{
                      ring: 'primary.500',
                      borderColor: 'primary.500'
                    }}
                    color = "black"
                  />
                </FormControl>
                <Button
                  type="submit"
                  height="50px"
                  py={5}
                  px={5}
                  fontSize="md"
                  fontWeight="medium"
                  textAlign="center"
                  color="white"
                  rounded="lg"
                  bg="black"
                  _hover={{ bg: 'dark.800' }}
                  _focus={{ ring: 4, outline: 'none', ringColor: 'primary.300' }}
                >
                  {loading ? "Loading.." : "Send message"}
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUs;
