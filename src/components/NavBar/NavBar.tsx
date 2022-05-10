import { Box, Button, Heading } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Logo, LayoutTheme } from "..";

export interface NavBarProps {
  theme: LayoutTheme;
}

export const NavBar = ({ theme }: NavBarProps) => {
  return (
    <Box
      id="nav"
      bg={theme.bg}
      color={theme.color}
      maxWidth="100vw"
      display="flex"
      alignItems="center"
      px={8}
      py={2}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Logo />
        <Heading as="h3" size="lg" ml={2}>
          Stock Comparator
        </Heading>
      </Box>
      <Box>
        <Button onClick={theme.toggleColorMode}>
          {theme.colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
        </Button>
      </Box>
    </Box>
  );
};
