import React from "react";
import { render, renderHook } from "@testing-library/react";
import { TabBar } from "..";
import { useLayoutTheme } from "../..";

describe("TabBar Tests", () => {
  test("Autocomplete Renders", () => {
    const { result } = renderHook(() => useLayoutTheme());
    const { container } = render(
      <TabBar
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        handleViewChange={() => {}}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        handleSelect={() => {}}
        theme={result.current}
      />
    );

    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
  });
});
