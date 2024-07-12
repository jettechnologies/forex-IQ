import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Features from './components/Features';
// import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
// import PolicyPage from './components/PolicyPage'; // Assuming you have a PolicyPage component
import Terms from './components/Terms';
import Refund from './components/Refund';
import Privacy from './components/Privacy';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box bg="#0e1113" color="white" minH="100vh" overflowX = "hidden">
        <Router>
          <Routes>
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-condition" element={<Terms />} />
            <Route path="/refund-policy" element={<Refund />} />

            <Route path="/" element={
              <>
                <Header />
                <Features />
                <AboutUs />
                {/* <Pricing /> */}
                <ContactUs />
                <Footer />
              </>
            } />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
