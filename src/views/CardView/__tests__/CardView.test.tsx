import React from "react";
import { render, screen } from "@testing-library/react";
import { CardView } from "../CardView";

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
      <CardView
        stocks={undefined}
        handleRemove={() => {
          return;
        }}
      />
    );

    const heading = screen.getByText("No Stocks Selected");
    expect(heading).toBeInTheDocument();
  });
  test("Card Renders", () => {
    render(
      <CardView
        stocks={negativeStock}
        handleRemove={() => {
          return;
        }}
      />
    );

    const heading = screen.getByText("R - Ryder System Inc");
    expect(heading).toBeInTheDocument();
  });
  test("Red Arrow Down Renders", () => {
    const { container } = render(
      <CardView
        stocks={negativeStock}
        handleRemove={() => {
          return;
        }}
      />
    );

    const icon = container.querySelector('svg[aria-label="downIcon"]');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("color", "#F56565");
  });
  test("Green Arrow Up Renders", () => {
    const { container } = render(
      <CardView
        stocks={positiveStock}
        handleRemove={() => {
          return;
        }}
      />
    );

    const icon = container.querySelector('svg[aria-label="upIcon"]');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("color", "#48BB78");
  });
});
