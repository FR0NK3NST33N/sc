import React from "react";
import { renderHook } from "@testing-library/react";
import { useAlphaVantage } from "../..";

describe("Alpha Vantage API Tests", () => {
  test("Search: Error code returns empty array", async () => {
    const { result } = renderHook(() => useAlphaVantage());

    const response = await result.current.search("null");
    expect(response).toEqual([]);
  });
  test("Search: API Limit Reached", async () => {
    const { result } = renderHook(() => useAlphaVantage());

    const response = await result.current.search("T");
    expect(response).toEqual([]);
  });
  test("Stock: Error code returns undefined", async () => {
    const { result } = renderHook(() => useAlphaVantage());

    const response = await result.current.stock("null");
    expect(response).toEqual(undefined);
  });
  test("Stock: API Limit Reached", async () => {
    const { result } = renderHook(() => useAlphaVantage());

    const response = await result.current.stock("T");
    expect(response).toEqual(undefined);
  });
});
