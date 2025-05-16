import React from "react";
import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";

const techIcons = [
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React JS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Node JS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express JS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Mongoose", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" },
];

const toolIcons = [
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "MongoDB Compass", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Chrome", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
];

const TechStack = () => (
  <Box
    id="skills"
    bgGradient="linear(135deg, #201c3a 0%, #2a2250 100%)"
    px={2}
    py={6}
    textAlign="center"
    borderRadius="2xl"
    my={4}
    boxShadow="lg"
  >
    <Heading as="h2" size="2xl" fontWeight="extrabold" mb={2} color="#fff" position="relative" display="inline-block">
      Skills
      <Box as="span" display="block" h={2} bgGradient="linear(90deg, #a084e8 0%, #6f6ee8 100%)" borderRadius="md" w="60%" mx="auto" mt={1} />
    </Heading>
    <SimpleGrid columns={{ base: 3, sm: 4, md: 7 }} spacing={6} justifyItems="center" my={6}>
      {techIcons.map((icon, idx) => (
        <VStack key={icon.name} spacing={2}>
          <Box
            as="img"
            src={icon.url}
            alt={icon.name}
            width={"56px"}
            height={"56px"}
            borderRadius={"50%"}
            background="#181c2f"
            boxShadow="0 2px 12px #a084e880"
            transition="all 0.2s"
            _hover={{
              transform: "scale(1.15)",
              boxShadow: "0 4px 24px #a084e8"
            }}
          />
          <Text color="#fff" fontSize="sm" fontWeight="semibold">{icon.name}</Text>
        </VStack>
      ))}
    </SimpleGrid>
    <Heading as="h3" size="md" fontWeight="bold" color="#a084e8" mt={8} mb={2} letterSpacing="wide">
      TOOLS AND SOFTWARE
    </Heading>
    <SimpleGrid columns={{ base: 3, sm: 5 }} spacing={6} justifyItems="center" my={4}>
      {toolIcons.map((icon, idx) => (
        <VStack key={icon.name} spacing={2}>
          <Box
            as="img"
            src={icon.url}
            alt={icon.name}
            width={"48px"}
            height={"48px"}
            borderRadius={"50%"}
            background="#181c2f"
            boxShadow="0 2px 12px #a084e880"
            transition="all 0.2s"
            _hover={{
              transform: "scale(1.15)",
              boxShadow: "0 4px 24px #a084e8"
            }}
          />
          <Text color="#fff" fontSize="xs" fontWeight="semibold">{icon.name}</Text>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default TechStack;
