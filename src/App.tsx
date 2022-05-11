import React from "react";
import { CardView, ListView, Views } from "./views";
import { Layout } from "./components";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useAlphaVantage, StockResponse } from "./services";
import { useView } from "./views/useView";

function App() {
  const stocks = localStorage.getItem("stocks");
  const toast = useToast();
  const { view, handleViewChange } = useView();
  const { stock } = useAlphaVantage();
  const [selectedStocks, setSelectedStocks] = useState<
    StockResponse[] | undefined
  >(stocks ? JSON.parse(stocks) : undefined);

  const handleSelect = (value: string) => {
    if (selectedStocks && selectedStocks.length >= 3) {
      toast({
        title: "Whoops, something went wrong!",
        description: `You can not add more than 3 stocks at this time`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    stock(value).then((res) => {
      const _selectedStocks = res
        ? [...(selectedStocks ?? []), res]
        : [...(selectedStocks ?? [])];
      setSelectedStocks(_selectedStocks);
      localStorage.setItem("stocks", JSON.stringify(_selectedStocks));
    });
  };

  const handleRemove = (symbol: string) => {
    if (selectedStocks?.length === 1) {
      setSelectedStocks(undefined);
      localStorage.removeItem("stocks");
      return;
    }
    const _selectedStocks = selectedStocks?.filter(
      (s) => s.symbol !== symbol
    ) as StockResponse[];
    setSelectedStocks(_selectedStocks);
    localStorage.setItem("stocks", JSON.stringify(_selectedStocks));
  };

  return (
    <>
      <Layout handleViewChange={handleViewChange} handleSelect={handleSelect}>
        {view === Views.card && (
          <CardView stocks={selectedStocks} handleRemove={handleRemove} />
        )}
        {view === Views.list && (
          <ListView stocks={selectedStocks} handleRemove={handleRemove} />
        )}
      </Layout>
    </>
  );
}

export default App;
