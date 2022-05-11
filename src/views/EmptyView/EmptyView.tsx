import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const EmptyView = () => {
  return (
    <Box
      height="100vh"
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>No Stocks Selected</Heading>
      <Heading size="sm">
        Search and select a stock in the search bar above to add to the view
      </Heading>
    </Box>
  );
};
