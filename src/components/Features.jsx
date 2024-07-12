import { SimpleGrid, Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import automation from "../assets/automation.svg";
import algorithms from "../assets/algorithm.svg";
import realtime from "../assets/real_time_1.jpg";
import realtime2 from "../assets/real_time_2.jpg";
import charts from  "../assets/charts_3.jpg";
import charts_2 from  "../assets/charts_2.jpg";

const features = [
  {
    title: 'AUTOMATION',
    description: 'Automation is also known as algorithmic trading using computer programs to execute trades in financial markets based on predefined criteria.',
    img: automation,
  },
  {
    title: 'ALGORITHMS',
    description: 'Explore a wide array of pre-built strategies or develop your own custom algorithms to personalize your trading approach.',
    img: algorithms,
  },
  {
    title: 'RISK MANAGEMENT',
    description: 'Utilize stop-loss, take-profit, and position sizing mechanisms to manage and mitigate risks, ensuring the protection of your investments.',
    img: realtime,
  },
  {
    title: 'REAL-TIME',
    description: 'Stay current with real-time market data and execute orders promptly, ensuring you make well-informed, timely decisions.',
    img: realtime2,
  },
  {
    title: 'BACKTESTING',
    description: 'Backtesting involves testing trading strategies on historical data to evaluate performance, and refine strategies before live trading.',
    img: charts,
  },
  {
    title: 'CUSTOMIZATION',
    description: 'Customize your user interface and strategy to align with your trading style, enriching your overall trading experience.',
    img: charts_2,
  },
];

const MotionBox = motion(Box);

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Features = () => {
  return (
    <Box id="features" py={10} px={6} textAlign="center" bg="#011b3d">
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h2" size="xl" mb={2} color="white">
          Unleash the full financial potential with our best features
        </Heading>
        <Text fontSize="lg" mb={6} color="white">
          Discover the tools and functionalities designed to enhance your trading experience.
        </Text>
      </MotionBox>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} justifyContent="center">
        {features.map((feature, index) => (
          <MotionBox
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            p={5}
            shadow="md"
            rounded="md"
            bg="#191b20"
            width="300px"
            mx="auto"
          >
            <Image
              src={feature.img}
              alt={feature.title}
              borderRadius="md"
              mb={4}
              w="100%"
              h={{ base: "7rem", md: "8rem", lg: "10rem" }}
              objectFit="cover"
            />
            <Heading as="h3" size="md" mb={2} color="white">
              {feature.title}
            </Heading>
            <Text fontSize="14px" mb={4} color="white">{feature.description}</Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
