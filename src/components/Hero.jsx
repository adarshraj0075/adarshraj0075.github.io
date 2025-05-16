import React from "react";
import { Box, Heading, Text, Avatar, VStack, Flex, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Box position="relative" overflow="hidden" h="100vh" w="100%">
      {/* Particles Animation Overlay (background) */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={-1} w="100%" h="100%">
        <Particles
          id="tsparticles-hero"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 100, duration: 0.4 }
              }
            },
            particles: {
              color: { value: "#a084e8" },
              links: {
                color: "#a084e8",
                distance: 80,
                enable: true,
                opacity: 1,
                width: 4
              },
              collisions: { enable: true },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: true,
                speed: 0.7,
                straight: false
              },
              number: {
                density: { enable: true, area: 800 },
                value: 180
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.7,
                  sync: false
                }
              },
              shape: {
                type: ["circle", "triangle"],
                stroke: { width: 0, color: "#a084e8" }
              },
              size: {
                value: { min: 5, max: 12 },
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 2,
                  sync: false
                }
              }
            },
            detectRetina: true
          }}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
        />
      </Box>
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="radial(circle at 50% 50%, rgba(26, 32, 44, 0.8) 0%, rgba(26, 32, 44, 0.95) 100%)"
        zIndex={0}
      />
      <Flex
        id="home"
        h="100vh"
        align="center"
        justify="center"
        px={{ base: 4, md: 8 }}
        py={4}
        direction={{ base: "column", md: "row" }}
        position="relative"
        zIndex={1}
        w="100%"
      >
        <Box
          bg="transparent"
          borderRadius="2xl"
          p={0}
          w="full"
          maxW="2xl"
          zIndex={2}
        >
          <VStack align="flex-start" spacing={6} w="full" mt={{ base: 12, md: 0 }}>
            <Text
              fontSize="lg"
              color="#a084e8"
              fontWeight="semibold"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              Welcome to my portfolio
            </Text>

            <Box position="relative">
              <Heading
                as="h1"
                size="4xl"
                fontWeight="extrabold"
                color="#fff"
                lineHeight={1.1}
                mb={0}
              >
                Hi, I'm{" "}
                <Box
                  as="span"
                  color="#a084e8"
                  position="relative"
                  display="inline-block"
                  sx={{
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "8px",
                      bottom: "-4px",
                      left: 0,
                      background: "linear-gradient(90deg, #a084e8 0%, #6f6ee8 100%)",
                      borderRadius: "4px",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  Adarsh Raj
                </Box>
              </Heading>
            </Box>

            <Text
              fontSize="2xl"
              color="#a084e8"
              fontWeight="semibold"
              letterSpacing="wide"
            >
              Full Stack Developer
            </Text>

            <Text
              maxW="lg"
              fontSize="lg"
              color="gray.200"
              lineHeight="tall"
            >
              Dynamic Full Stack Developer skilled in React, Node.js, MongoDB, and Java.
              <br />
              Passionate about building scalable web apps and collaborating across teams.
            </Text>

            <Box>
              <Button
                as="a"
                href="#contact"
                rightIcon={<FaArrowRight />}
                colorScheme="purple"
                size="lg"
                fontWeight="bold"
                borderRadius="md"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px #a084e8",
                  bg: "#6f6ee8"
                }}
                transition="all 0.2s"
              >
                Get in Touch
              </Button>
            </Box>
          </VStack>
        </Box>

        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={{ base: 8, md: 0 }}
          zIndex={2}
          position="relative"
        >
          {/* Static Glow Behind Avatar */}
          <Box
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            zIndex={1}
            width="240px"
            height="240px"
            borderRadius="50%"
            background="radial-gradient(circle, #a084e8 0%, #181c2f 80%)"
            filter="blur(32px)"
            opacity={0.5}
          />
          <Avatar
            src="/profile.jpg"
            name="Adarsh Raj"
            size="2xl"
            boxShadow="2xl"
            borderWidth={4}
            borderColor="#a084e8"
            style={{
              background: "#181c2f",
              border: "4px solid #a084e8",
              zIndex: 2,
              boxShadow: "0 0 32px #a084e8",
              width: "300px",
              height: "300px"
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
