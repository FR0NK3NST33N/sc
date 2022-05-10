import { Box, Heading } from "@chakra-ui/react";

export interface EmptyViewProps {
  view: string;
}

export const EmptyView = ({ view }: EmptyViewProps) => {
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
