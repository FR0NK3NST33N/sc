import { useState } from "react";

export enum Views {
  card = "card",
  list = "list",
}

export const useLayout = () => {
  const [view, setView] = useState(Views.card);

  const handleViewChange = () => {
    if (view === Views.card) setView(Views.list);
    if (view === Views.list) setView(Views.card);
  };

  return {
    view,
    handleViewChange,
  };
};
