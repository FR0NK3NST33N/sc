import React from "react";
import { render, renderHook } from "@testing-library/react";
import { NavBar } from "../NavBar";
import { useLayoutTheme } from "../..";

describe("NavBar Tests", () => {
  test("Title Renders", () => {
    const { result } = renderHook(() => useLayoutTheme());
    const { container } = render(<NavBar theme={result.current} />);

    const heading = container.querySelector("h3");
    expect(heading).toBeInTheDocument();
  });
});
