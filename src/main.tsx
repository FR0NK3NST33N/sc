/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colorModeManager: "localstorage",
};

const colors = {};

const theme = extendTheme({ colors, config });

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
