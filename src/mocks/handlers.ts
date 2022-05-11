import { rest } from "msw";
import { BASE_URL } from "../services";

export const handlers = [
  rest.get(`${BASE_URL}/query`, (req, res, ctx) => {
    console.log(req.url.toString());
    const method = req.url.searchParams.get("function");
    const keywords = req.url.searchParams.get("keywords");
    const symbol = req.url.searchParams.get("symbol");

    // search error
    if (method === "SYMBOL_SEARCH" && keywords === "NULL")
      return res(ctx.status(500));

    // stock error
    if (
      (method === "OVERVIEW" || method === "GLOBAL_QUOTE") &&
      symbol === "NULL"
    )
      return res(ctx.status(500));

    // search api limit
    if (method === "SYMBOL_SEARCH" && keywords === "T")
      return res(
        ctx.status(200),
        ctx.json({ data: { Note: "value" }, status: 200 })
      );

    // stock api limit
    if ((method === "OVERVIEW" || method === "GLOBAL_QUOTE") && symbol === "T")
      return res(
        ctx.status(200),
        ctx.json({ data: { Note: "value" }, status: 200 })
      );

    // search

    // stocks
  }),
];
