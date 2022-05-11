import React from "react";
import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Autocomplete, LayoutTheme, Logo } from "..";

export interface TabBarProps {
  handleViewChange: () => void;
  handleSelect: (value: string) => void;
  theme: LayoutTheme;
}

export const TabBar = ({
  handleViewChange,
  handleSelect,
  theme,
}: TabBarProps) => {
  const subNavRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (subNavRef.current) {
      const { offsetTop } = subNavRef.current;
      if (offsetTop > 66) {
        controls.start("visible");
      }
      if (offsetTop <= 66) {
        controls.start("hidden");
      }
    }
  };

  return (
    <Box
      px={8}
      pb={0}
      py={2}
      boxShadow={theme.tabBarBoxShadow}
      position="sticky"
      top={0}
      bg={theme.bg}
      display="flex"
      ref={subNavRef}
      color={theme.color}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        flexGrow={1}
      >
        <Box display="flex">
          <motion.div
            style={{ marginRight: "15px" }}
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                display: "block",
                y: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              },
              hidden: {
                opacity: 0,
                y: -20,
                display: "none",
              },
            }}
          >
            <Logo fill={theme.tabBarLogoFill} tabBarVariant />
          </motion.div>
          <Autocomplete handleSelect={handleSelect} />{" "}
        </Box>
        <Box>
          <Tabs variant="unstyled">
            <TabList>
              <Tab
                pb={4}
                mb={"-2"}
                _selected={{ borderBottom: "2px" }}
                onClick={handleViewChange}
              >
                Cards
              </Tab>
              <Tab
                pb={4}
                mb={"-2"}
                _selected={{ borderBottom: "2px" }}
                onClick={handleViewChange}
              >
                List
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};
