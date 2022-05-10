import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export interface LayoutTheme {
  bg: string;
  color: string;
  colorMode: string;
  tabBarBoxShadow: string;
  tabBarLogoFill: string;
  toggleColorMode: () => void;
}

export const useLayoutTheme = (): LayoutTheme => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");
  const tabBarBoxShadow = useColorModeValue(
    "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "0 1px 2px 0 rgba(255, 255, 255, 0.05)"
  );
  const tabBarLogoFill = useColorModeValue("#1A202C", "white");

  return {
    bg,
    color,
    colorMode,
    tabBarBoxShadow,
    tabBarLogoFill,
    toggleColorMode,
  };
};
