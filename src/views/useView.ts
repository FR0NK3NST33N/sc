import { useState } from "react";
import { Views } from "./models";

export const useView = () => {
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
