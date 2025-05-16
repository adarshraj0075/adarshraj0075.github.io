import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Resume = () => (
  <MotionBox
    id="resume"
    bgGradient="linear(135deg, #201c3a 0%, #2a2250 100%)"
    px={2}
    py={6}
    textAlign="center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    borderRadius="2xl"
    my={4}
    boxShadow="lg"
  >
    <Heading as="h2" size="lg" fontWeight="extrabold" mb={4} color="#fff">
      Resume
    </Heading>
    <Button
      as="a"
      href="https://drive.google.com/file/d/1J1lyqOZ9QMCiuG28kHeG5uubtGUdz0U6/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      colorScheme="purple"
      size="md"
      fontWeight="semibold"
      boxShadow="md"
      _hover={{ bg: "purple.700" }}
    >
      Download Resume
    </Button>
  </MotionBox>
);

export default Resume;
