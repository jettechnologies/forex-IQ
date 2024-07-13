import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Privacy from './pages/Privacy';
import Home from './pages/Home';
import Layout from './Layout';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box bg="#0e1113" color="white" minH="100vh" overflowX = "hidden">
        <Router>
          <Routes>
          <Route path="/" element = {<Layout />}>
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-condition" element={<Terms />} />
            <Route path="/refund-policy" element={<Refund />} />

            <Route index element={<Home />} />
            <Route path = "/about-us" element = {<AboutUs/>} />

            </Route>
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
