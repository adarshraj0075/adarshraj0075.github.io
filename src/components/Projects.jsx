import React from "react";
import { Box, Heading, SimpleGrid, Button, Text, Stack, Tag, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Virtual Classroom",
    desc: "Real-time video conferencing platform for students and teachers.",
    tech: ["MERN", "Redux", "Socket.io"],
    github: "https://github.com/adarshraj2512/academix-virtual-classroom.git",
    live: "https://splendorous-sprinkles-6c88e3.netlify.app/",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Online Banking System",
    desc: "Secure banking system with Node.js and MySQL backend.",
    tech: ["Node.js", "MySQL"],
    github: "https://github.com/adarshraj0075/bank-management-system.git",
    live: "https://web-production-8ee7.up.railway.app/",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Weight Check on planet",
    desc: "Calculate your weight on different planets.",
    tech: ["React", "HTML", "CSS", "JS"],
    github: "https://github.com/adarshraj0075/Weight-On-diff-planet.git",
    live: "https://weight-on-diff-planet.vercel.app/",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  }
];

const Projects = () => (
  <Box id="projects" bgGradient="linear(135deg, #181c2f 0%, #2a2250 100%)" px={2} py={10} borderRadius="2xl" my={4} boxShadow="lg">
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Text color="#a084e8" fontWeight="bold" fontSize="md" mb={1} letterSpacing="wide" textAlign="center">
        MY WORK
      </Text>
      <Heading as="h2" size="2xl" fontWeight="extrabold" mb={2} textAlign="center" color="#fff">
        Projects.
      </Heading>
      <Text color="gray.300" fontSize="md" mb={8} maxW="2xl" textAlign="center">
        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </Text>
    </Box>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {projects.map((proj, index) => (
        <Box
          key={index}
          bg="#221c3a"
          borderRadius="2xl"
          boxShadow="2xl"
          p={0}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          _hover={{ boxShadow: "dark-lg", transform: "translateY(-4px) scale(1.02)" }}
          transition="all 0.2s"
          position="relative"
        >
          <Box position="relative" borderTopRadius="2xl" overflow="hidden">
            <img
              src={proj.image}
              alt={proj.title}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <HStack position="absolute" top={2} right={2} spacing={2} zIndex={2}>
              <Tooltip label="GitHub" hasArrow>
                <IconButton
                  as="a"
                  href={proj.github}
                  target="_blank"
                  icon={<FaGithub />}
                  size="sm"
                  colorScheme="gray"
                  variant="solid"
                  borderRadius="full"
                  aria-label="GitHub"
                  bg="#181c2f"
                  color="white"
                  _hover={{ bg: "#a084e8", color: "white" }}
                />
              </Tooltip>
              <Tooltip label="Live Demo" hasArrow>
                <IconButton
                  as="a"
                  href={proj.live}
                  target="_blank"
                  icon={<FaExternalLinkAlt />}
                  size="sm"
                  colorScheme="purple"
                  variant="solid"
                  borderRadius="full"
                  aria-label="Live Demo"
                  bg="#181c2f"
                  _hover={{ bg: "#a084e8", color: "white" }}
                />
              </Tooltip>
            </HStack>
          </Box>
          <Box p={5} flex={1} display="flex" flexDirection="column">
            <Heading as="h3" size="md" fontWeight="bold" color="#fff" mb={2}>
              {proj.title}
            </Heading>
            <Text color="gray.200" fontSize="sm" mb={3}>
              {proj.desc}
            </Text>
            <HStack spacing={2} mt="auto" flexWrap="wrap">
              {proj.tech.map((tag) => (
                <Tag key={tag} colorScheme="purple" variant="solid" fontSize="xs" borderRadius="md">
                  {tag}
                </Tag>
              ))}
            </HStack>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default Projects;
