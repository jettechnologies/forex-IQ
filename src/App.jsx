import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PolicyPage from './components/PolicyPage'; // Assuming you have a PolicyPage component
import Terms from './components/Terms';
import Refund from './components/Refund';
import Privacy from './components/Privacy';
import Home from './pages/Home';
import Layout from './Layout';

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

            </Route>
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
