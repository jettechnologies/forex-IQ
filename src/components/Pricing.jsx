import { Box, Heading, Text, SimpleGrid, VStack, Button, keyframes } from '@chakra-ui/react';

// Define the keyframes for the glowing effect
const glow = keyframes`
  0% { box-shadow: 0 0 5px #007377; }
  50% { box-shadow: 0 0 20px blue; }
  100% { box-shadow: 0 0 5px #007377; }
`;

// Dummy features for each plan
const plans = [
  {
    name: 'Basic',
    price: '$10/month',
    features: [
      'Basic Feature 1',
      'Basic Feature 2',
      'Basic Feature 3',
      'Basic Feature 4',
    ],
  },
  {
    name: 'Pro',
    price: '$30/month',
    features: [
      'Pro Feature 1',
      'Pro Feature 2',
      'Pro Feature 3',
      'Pro Feature 4',
      'Pro Feature 5',
      'Pro Feature 6',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$50/month',
    features: [
      'Enterprise Feature 1',
      'Enterprise Feature 2',
      'Enterprise Feature 3',
      'Enterprise Feature 4',
      'Enterprise Feature 5',
      'Enterprise Feature 6',
      'Enterprise Feature 7',
      'Enterprise Feature 8',
    ],
  },
];

const Pricing = () => {
  return (
    <Box color="white" py={20} textAlign="center">
      <Heading mb={8}>Pricing Plans</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={{ base: 8, md: 10 }}>
        {plans.map((plan, index) => (
          <VStack
            key={index}
            p={8}
            bg={plan.highlight ? '#011b3d' : 'gray.700'}
            borderRadius="md"
            boxShadow="md"
            animation={plan.highlight ? `${glow} 2s infinite` : 'none'}
            textAlign="left"
          >
            <Heading size="lg" mb={4}>{plan.name}</Heading>
            <Text fontSize="2xl" mb={4}>{plan.price}</Text>
            <VStack spacing={2} mb={4} alignItems="flex-start">
              {plan.features.map((feature, idx) => (
                <Text key={idx}>{feature}</Text>
              ))}
            </VStack>
            <Button
              colorScheme={plan.highlight ? 'teal' : 'blue'}
              variant={plan.highlight ? 'solid' : 'outline'}
              width="full"
            >
              Sign Up
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Pricing;