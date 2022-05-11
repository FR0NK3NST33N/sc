import React from "react";
import { render, screen } from "@testing-library/react";
import { ListView } from "..";

const negativeStock = [
  {
    exchange: "NYSE",
    globalQuote: {
      change: "-1.4100",
      changePercent: "-1.8972%",
      high: "74.0075",
      low: "72.1500",
      open: "73.2600",
      price: "72.9100",
    },
    name: "Ryder System Inc",
    sector: "TRADE & SERVICES",
    symbol: "R",
  },
];

const positiveStock = [
  {
    exchange: "NYSE",
    globalQuote: {
      change: "-1.4100",
      changePercent: "1.8972%",
      high: "74.0075",
      low: "72.1500",
      open: "73.2600",
      price: "72.9100",
    },
    name: "Ryder System Inc",
    sector: "TRADE & SERVICES",
    symbol: "R",
  },
];

describe("CardView Tests", () => {
  test("Empty View Renders", () => {
    render(
      <ListView
        stocks={undefined}
        handleRemove={() => {
          return;
        }}
      />
    );

    const heading = screen.getByText("No Stocks Selected");
    expect(heading).toBeInTheDocument();
  });
  test("Table Renders", () => {
    const { container } = render(
      <ListView
        stocks={negativeStock}
        handleRemove={() => {
          return;
        }}
      />
    );

    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
  });
  test("Table Renders Appropriate Row Count", () => {
    const { container } = render(
      <ListView
        stocks={negativeStock}
        handleRemove={() => {
          return;
        }}
      />
    );

    const tableRows = container.querySelectorAll("tbody tr");
    expect(tableRows.length).toEqual(1);
  });
});
