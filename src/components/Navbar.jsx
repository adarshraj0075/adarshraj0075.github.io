import React, { useState, useEffect } from "react";
import { Box, Flex, HStack, Link as ChakraLink, Text, Spacer, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const links = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
  { name: "Resume", href: "#resume", id: "resume" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact", "resume"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActive(id);
    onClose();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      as="nav"
      bg="transparent"
      position="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex={100}
      px={{ base: 2, md: 8 }}
      py={2}
      style={{ backdropFilter: "blur(4px)" }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="extrabold" color="#fff" letterSpacing="tight" textShadow="0 2px 8px #000">
          MERN Stack Developer
        </Text>
        <Spacer />
        <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <ChakraLink
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.id)}
              fontWeight="bold"
              color={active === link.id ? "#a084e8" : "#fff"}
              fontSize="lg"
              borderBottom={active === link.id ? "2px solid #a084e8" : "2px solid transparent"}
              transition="all 0.2s"
              _hover={{ color: "#a084e8" }}
              px={2}
            >
              {link.name}
            </ChakraLink>
          ))}
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          colorScheme="purple"
          variant="ghost"
        />
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <ChakraLink
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                fontWeight="bold"
                color={active === link.id ? "#a084e8" : "#fff"}
                fontSize="lg"
                borderLeft={active === link.id ? "4px solid #a084e8" : "4px solid transparent"}
                pl={2}
                transition="all 0.2s"
                _hover={{ color: "#a084e8" }}
              >
                {link.name}
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
