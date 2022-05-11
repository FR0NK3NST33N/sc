import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  CloseButton,
  TableContainer,
} from "@chakra-ui/react";
import { EmptyView } from "..";
import { StockResponse } from "../../services";

export interface ListViewProps {
  stocks?: StockResponse[];
  handleRemove: (symbol: string) => void;
}

export const ListView = ({ stocks, handleRemove }: ListViewProps) => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <>
      {!stocks && <EmptyView />}
      {stocks && (
        <TableContainer
          overflowY="auto"
          height={{ sm: "calc(100vh - 162px)", md: "calc(100vh - 124px)" }}
        >
          <Table variant="simple" mt={"0.5"}>
            <Thead top={0} position="sticky" bg={bg}>
              <Tr>
                <Th>Symbol</Th>
                <Th>Name</Th>
                <Th>Exchange</Th>
                <Th>Sector</Th>
                <Th>Price</Th>
                <Th>Difference</Th>
                <Th>High</Th>
                <Th>Low</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody zIndex={"-5"}>
              {stocks.map((stock) => (
                <Tr key={stock.symbol}>
                  <Td>{stock.symbol}</Td>
                  <Td>{stock.name}</Td>
                  <Td>{stock.exchange}</Td>
                  <Td>{stock.sector}</Td>
                  <Td
                    color={
                      stock.globalQuote.changePercent.startsWith("-")
                        ? "#F56565"
                        : "#48BB78"
                    }
                  >{`$${Number(stock.globalQuote.price).toFixed(2)}`}</Td>
                  <Td>{stock.globalQuote.changePercent}</Td>
                  <Td>{`$${Number(stock.globalQuote.high).toFixed(2)}`}</Td>
                  <Td>{`$${Number(stock.globalQuote.low).toFixed(2)}`}</Td>
                  <Td>
                    <CloseButton onClick={() => handleRemove(stock.symbol)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
