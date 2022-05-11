import React from "react";
import { Box } from "@chakra-ui/react";
import { NavBar, TabBar } from "..";
import { useLayoutTheme } from "./useLayoutTheme";

export interface LayoutProps {
  handleViewChange: () => void;
  handleSelect: (value: string) => void;
  children: any;
}

export const Layout = ({
  handleViewChange,
  handleSelect,
  children,
}: LayoutProps) => {
  const theme = useLayoutTheme();

  return (
    <Box>
      <NavBar theme={theme} />
      <TabBar
        theme={theme}
        handleViewChange={handleViewChange}
        handleSelect={handleSelect}
      />
      <Box id="content" px={8}>
        {children}
      </Box>
    </Box>
  );
};
