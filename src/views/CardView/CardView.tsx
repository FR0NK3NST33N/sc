import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Tag,
  Tooltip,
  Text,
  CloseButton,
} from "@chakra-ui/react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { EmptyView } from "..";
import { StockResponse } from "../../services";

export interface CardViewProps {
  stocks?: StockResponse[];
  handleRemove: (symbol: string) => void;
}

export const CardView = ({ stocks, handleRemove }: CardViewProps) => {
  return (
    <>
      {!stocks && <EmptyView />}
      {stocks && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={10}
          mt={50}
          pb={40}
        >
          {stocks.map((stock) => (
            <Box border="1px" rounded="md" p={4} key={stock.symbol}>
              <CloseButton
                float="right"
                onClick={() => handleRemove(stock.symbol)}
              />
              <Tooltip
                label={`${stock.symbol} - ${stock.name}`}
                placement="top-start"
              >
                <Heading
                  size="lg"
                  isTruncated
                >{`${stock.symbol} - ${stock.name}`}</Heading>
              </Tooltip>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                pt={2}
              >
                <Heading size="sm" pt={1} isTruncated>
                  {stock.exchange}
                </Heading>
                <Tag>{stock.sector}</Tag>
              </Box>
              <Box display="flex" alignItems="center" mt={4}>
                {stock.globalQuote.changePercent.startsWith("-") ? (
                  <MdArrowDownward
                    size="36px"
                    color="#F56565"
                    aria-label="downIcon"
                  />
                ) : (
                  <MdArrowUpward
                    size="36px"
                    color="#48BB78"
                    aria-label="upIcon"
                  />
                )}
                <Heading>{`$${Number(stock.globalQuote.price).toFixed(
                  2
                )}`}</Heading>
                <Text alignSelf="end" ml={2}>
                  {stock.globalQuote.changePercent}
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-around" mt={4}>
                <Box>
                  <Text>
                    High: {`$${Number(stock.globalQuote.high).toFixed(2)}`}
                  </Text>
                </Box>
                <Box>
                  <Text>
                    Low: {`$${Number(stock.globalQuote.low).toFixed(2)}`}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
