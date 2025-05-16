import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const GitHubStats = () => (
  <Box
    id="github-stats"
    bgGradient="linear(135deg, #181c2f 0%, #2a2250 100%)"
    px={2}
    py={6}
    textAlign="center"
    borderRadius="2xl"
    my={4}
    boxShadow="lg"
  >
    <Heading as="h2" size="lg" fontWeight="extrabold" mb={4} color="#fff">
      GitHub Stats
    </Heading>
    <Box bg="whiteAlpha.100" rounded="lg" shadow="lg" p={3} display="inline-block">
      <Image src="/github-calendar.png" alt="GitHub Calendar" mx="auto" rounded="md" boxShadow="md" border="1px solid #a084e8" />
    </Box>
    <Text mt={2} fontSize="sm" color="#a084e8">
      GitHub contribution calendar
    </Text>
  </Box>
);

export default GitHubStats;
