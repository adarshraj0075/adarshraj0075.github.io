import React from "react";
import { Box, Heading, Text, Link as ChakraLink, Stack, HStack, Icon, Button, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight, FaPhone } from "react-icons/fa";

const Contact = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box id="contact" bgGradient="linear(135deg, #201c3a 0%, #2a2250 100%)" px={2} py={10} borderRadius="2xl" my={4} boxShadow="lg" minH="60vh">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
        {/* Left: Contact Card */}
        <Box
          bg="#181c2f"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          boxShadow="xl"
        >
          <Text color="#a084e8" fontWeight="bold" fontSize="md" mb={2} letterSpacing="wide">
            GET IN TOUCH
          </Text>
          <Heading as="h2" size="2xl" fontWeight="extrabold" mb={4} color="#fff">
            Contact.
          </Heading>
          <Stack direction="column" spacing={2} mb={4}>
            <HStack>
              <Icon as={FaPhone} color="#a084e8" />
              <Text color="#fff" fontWeight="medium" fontSize="md">8578911934</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} color="#a084e8" />
              <Text color="#fff" fontWeight="medium" fontSize="md">adarshraj2512@gmail.com</Text>
            </HStack>
          </Stack>
          <Stack direction={{ base: "column", sm: "row" }} spacing={3} mt={6}>
            <Button
              as="a"
              href="https://www.linkedin.com/in/adarshraj2512"
              leftIcon={<FaLinkedin />}
              colorScheme="purple"
              variant="outline"
              fontWeight="bold"
              fontSize="sm"
              borderRadius="md"
              _hover={{ bg: "#a084e8", color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </Button>
            <Button
              as="a"
              href="https://github.com/adarshraj0075"
              leftIcon={<FaGithub />}
              colorScheme="purple"
              variant="outline"
              fontWeight="bold"
              fontSize="sm"
              borderRadius="md"
              _hover={{ bg: "#a084e8", color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </Button>
          </Stack>
        </Box>
        {/* Right: Contact Image */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            as="img"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Contact Us"
            borderRadius="2xl"
            boxShadow="2xl"
            maxH="260px"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </SimpleGrid>
      {/* Resume Download at the bottom */}
      <Box mt={12} textAlign="center">
        <Button
          as="a"
          href="https://drive.google.com/file/d/1J1lyqOZ9QMCiuG28kHeG5uubtGUdz0U6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="purple"
          variant="outline"
          size="lg"
          fontWeight="bold"
          rightIcon={<FaArrowRight />}
          borderRadius="md"
          _hover={{ bg: "#a084e8", color: "white" }}
        >
          RESUME
        </Button>
        <Text color="#fff" fontWeight="bold" fontSize="lg" mt={4}>
          Thanks for scrolling.
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
