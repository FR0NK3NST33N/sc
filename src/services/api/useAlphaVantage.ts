import axios from "axios";
import { BASE_URL, FALLBACK_API_KEY } from "./constants";
import { useToast } from "@chakra-ui/react";
import {
  AlphaVantageOverviewResponse,
  AlphaVantageQuoteResponse,
  AlphaVantageSearchResponse,
  SearchResponse,
  StockResponse,
} from "./models";
import { ApiLimitResponse } from ".";

export const useAlphaVantage = () => {
  const toast = useToast();
  const API_KEY = import.meta.env.VITE_API_KEY ?? FALLBACK_API_KEY; //vite specific for handling env

  const search = async (inputValue: string): Promise<SearchResponse[]> => {
    try {
      const results: AlphaVantageSearchResponse = await axios.get(
        `${BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${inputValue.toUpperCase()}&apikey=${API_KEY}`
      );
      if (results.status !== 200)
        throw Error("The call to AlphaVantage failed");
      if (results.data.Note) throw Error("The API limit was reached");

      return results.data.bestMatches.map((obj) => ({
        value: obj["1. symbol"],
        label: `${obj["1. symbol"]} - ${obj["2. name"]}`,
      }));
    } catch (err: any) {
      toast({
        title: "Whoops, something went wrong!",
        description: `${err}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.error(err);
      return [];
    }
  };

  const stock = async (symbol: string): Promise<StockResponse | undefined> => {
    try {
      const {
        data: overViewResults,
        status: overviewStatus,
      }: AlphaVantageOverviewResponse = await axios.get(
        `${BASE_URL}/query?function=OVERVIEW&symbol=${symbol.toUpperCase()}&apikey=${API_KEY}`
      );
      if (overviewStatus !== 200)
        throw Error("The call to AlphaVantage failed");
      if (overViewResults.Note) throw Error("The API limit was reached");

      const {
        data: quoteResults,
        status: quoteStatus,
      }: AlphaVantageQuoteResponse = await axios.get(
        `${BASE_URL}/query?function=GLOBAL_QUOTE&symbol=${symbol.toUpperCase()}&apikey=${API_KEY}`
      );
      if (quoteStatus !== 200) throw Error("The call to AlphaVantage failed");
      if (quoteResults.Note) throw Error("The API limit was reached");

      return {
        symbol: overViewResults.Symbol,
        name: overViewResults.Name,
        exchange: overViewResults.Exchange,
        sector: overViewResults.Sector,
        globalQuote: {
          open: quoteResults["Global Quote"]["02. open"],
          high: quoteResults["Global Quote"]["03. high"],
          low: quoteResults["Global Quote"]["04. low"],
          price: quoteResults["Global Quote"]["05. price"],
          change: quoteResults["Global Quote"]["09. change"],
          changePercent: quoteResults["Global Quote"]["10. change percent"],
        },
      };
    } catch (err: any) {
      toast({
        title: "Whoops, something went wrong!",
        description: `${err}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.error(err);
      return undefined;
    }
  };

  return {
    search,
    stock,
  };
};
