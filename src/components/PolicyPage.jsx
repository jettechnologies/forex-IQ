import { useState } from 'react';
import { Box, Flex, Tab, Tabs, TabList, TabPanels, TabPanel, Text } from '@chakra-ui/react';
import Footer from './Footer';
import heroImg from "../assets/img2.jpg";

const PolicyPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  console.log(selectedTab);

  return (
    <Box>
      <Box 
        mb={4} 
        position="relative" 
        height="350px" 
        background={`url(${heroImg}) center/cover no-repeat`}
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
          <Text fontSize="4xl" fontWeight="bold">Policy Page</Text>
          <Text fontSize="xl">Your Subheading Here</Text>
        </Box>
      </Box>
      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Box flex="1">
          <Tabs orientation={{ base: 'horizontal', lg: 'vertical' }} onChange={index => setSelectedTab(index)}>
            <TabList justifyContent="space-around">
              <Tab>Terms and Conditions</Tab>
              <Tab>Privacy Policy</Tab>
              <Tab>Refund Policy</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box p={4}>
                  <h2>Terms and Conditions</h2>
                  <p><b>License and Usage:</b> The Forex IQ grants you a non-exclusive, non-transferable, limited license to use for personal or business purposes, in accordance with these Terms. You must be of legal age to use in the Forex markets. By using the software, you confirm that you meet the legal age requirement.</p>
                  <p><b>Data and Content:</b> The Forex IQ provides access to financial data and content for informational purposes. While we endeavor to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or reliability of the data and content. You acknowledge the inherent volatility of financial markets, and that past performance is not indicative of future results.</p>
                  <p><b>Risk Disclosure:</b> Trading in the Forex markets involves financial risk. You must carefully consider your risk tolerance and financial situation before using the software. The Forex IQ does not provide financial advice. You are responsible for all trading decisions and their consequences. The software is a tool for execution; the user is solely responsible for strategy development and implementation.</p>
                  <p><b>Privacy and Data Security:</b> The Forex IQ is committed to safeguarding your data and privacy. We collect and process personal information in accordance with our Privacy Policy, which is an integral part of these Terms. You must not share your login credentials with others or allow unauthorized access to your account. You are responsible for any activity occurring under your account.</p>
                  <p><b>Intellectual Property:</b> The Forex IQ is protected by intellectual property rights, including copyrights and trademarks. You agree not to reproduce, modify, distribute, or create derivative works based on the software without prior written consent.</p>
                  <p><b>Termination:</b> The Forex IQ reserves the right to terminate your access at any time, without notice, for violation of these Terms or for any other reason.</p>
                  <p><b>Disclaimer:</b> The Forex IQ is provided as is and as available, without warranties of any kind, including but not limited to merchantability and fitness for a particular purpose. The software is not liable for any losses, damages, or liabilities resulting from your use of the software.</p>
                  <p><b>Indemnification:</b> You agree to indemnify and hold the software, its affiliates, and its employees, harmless from any claims, losses, or liabilities arising from your use of the software.</p>
                  <p><b>Amendments:</b> The Forex IQ may update or modify these Terms at any time. Continued use of the software following any changes constitutes acceptance of the revised Terms.</p>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box p={4}>
                  <h2>Privacy Policy</h2>
                  <p><b>Information Collection:</b></p>
                  <p>Personal Information: When you create an account or use The Forex IQ, we may collect personal information such as your name, email address, contact information, and payment details.</p>
                  <p>Usage Data: We collect data about your interactions with the software, including log data, device information, and analytics. This information helps us improve our services.</p>
                  <p>Financial Data: When you create an account or use The Forex IQ, we may collect personal information such as your name, email address, contact information, and payment details.</p>
                  <p><b>Use of Information:</b></p>
                  <p>Service Provision: The Forex IQ uses your information to provide, maintain, and improve the software. This includes executing trades, offering support, and enhancing user experience.</p>
                  <p>Communication: We may contact you for account-related notifications, updates, and customer support purposes.</p>
                  <p>Research and Analytics: The Forex IQ may use aggregated and anonymized data for research and analytical purposes, helping us enhance our services.</p>
                  <p>Compliance: We may use your information to comply with legal obligations and regulations, including anti-money laundering and know-your-customer checks.</p>
                  <p><b>Data Security:</b> The Forex IQ takes data security seriously. We employ industry-standard security measures to protect your information against unauthorized access, disclosure, or alteration. Your financial data, including payment information, is encrypted and securely stored. We do not store sensitive payment information on our servers.</p>
                  <p><b>Data Sharing:</b> The Forex IQ does not sell your personal information to third parties. However, we may share your data with service providers and partners who assist in the delivery of our services. We may disclose information in response to legal requests, law enforcement, and government inquiries, or as necessary to protect our rights, privacy, safety, or property.</p>
                  <p><b>Cookies and Tracking Technologies:</b> The Forex IQ may use cookies and tracking technologies to collect information about your use of the software. These technologies help us improve user experience and provide customized content.</p>
                  <p><b>Your Choices:</b> You can access, review, and update your personal information through your account settings in the software. You can also unsubscribe from non-essential communications. You can disable cookies in your browser, but this may affect the functionality of the software.</p>
                  <p><b>Childrens Privacy:</b> The Forex IQ is not intended for use by individuals under the legal age for trading in the Indian markets. We do not knowingly collect information from minors.</p>
                  <p><b>Changes to Privacy Policy:</b> The Forex IQ may update this Privacy Policy to reflect changes in our practices or legal requirements. Users will be notified of any significant changes via email or a notice on the software.</p>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box p={4}>
                  <h2>Refund Policy</h2>
                  <p><b>Eligibility for Refunds:</b></p>
                  <p>Initial Purchase Period: Refund requests must be made within 14 days of the initial purchase date.</p>
                  <p>Technical Issues: If The Forex IQ auto trading bot experiences technical issues that cannot be resolved within 30 days of reporting the issue to our support team, a refund may be granted.</p>
                  <p>Misrepresentation: If the product does not function as described on our website or in marketing materials, a refund may be granted upon verification of the discrepancy.</p>
                  <p><b>Non-Refundable Circumstances:</b></p>
                  <p>User Error: Refunds will not be granted for issues arising from user error or improper use of The Forex IQ.</p>
                  <p>Market Losses: Due to the inherent risks of trading in the forex market, refunds will not be issued for financial losses incurred while using The Forex IQ.</p>
                  <p>Change of Mind: Refunds will not be granted for customers who simply change their mind after purchase.</p>
                  <p><b>Refund Process:</b></p>
                  <p>Request Submission: To request a refund, contact our customer support team with your purchase details and a description of the issue.</p>
                  <p>Review and Verification: Our team will review your request and may require additional information or documentation to verify the claim.</p>
                  <p>Resolution: If the refund request is approved, we will process the refund within 7-10 business days. The refund will be issued to the original payment method.</p>
                  <p>We appreciate your understanding and thank you for choosing The Forex IQ. By using The Forex IQ, you consent to the practices described in this Privacy Policy. Please use the software responsibly and in compliance with applicable laws and regulations in the Forex markets.</p>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default PolicyPage;
