import { Box } from '@chakra-ui/react';
import Header from "../components/Header";
import Features from '../components/Features';
// import Pricing from './components/Pricing';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useCallback, useEffect } from 'react';

const Home = () => {

    // const navigate = useNavigate();
    // const { path } = useParams();
    // const routeChange = useCallback(() =>{ 
    //     navigate(path);
    // }, [path, navigate]);

    // useEffect(() => {
    //     routeChange();
    // }, [routeChange]);

  return (
    <Box bg="#0e1113" color="white" minH="100vh" overflowX = "hidden">
         <Header />
        <Features />
        <AboutUs />
        {/* <Pricing /> */}
        <ContactUs />
    </Box>
  )
}

export default Home