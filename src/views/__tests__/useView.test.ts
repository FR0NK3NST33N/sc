import React from "react";
import { renderHook } from "@testing-library/react";
import { useViews, Views } from "..";
import { act } from "react-dom/test-utils";

describe("Views Hook Tests", () => {
  test("Initial Value is Card", async () => {
    const { result } = renderHook(() => useViews());

    const response = await result.current.view;
    expect(response).toEqual(Views.card);
  });
  test("Handle View Change", async () => {
    const { result } = renderHook(() => useViews());
    act(() => result.current.handleViewChange());
    expect(result.current.view).toEqual(Views.list);
  });
});
