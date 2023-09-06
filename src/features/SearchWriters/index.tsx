import React from "react";
import { SearchWritersPresentation } from "./presentations/";
import { useWriters } from "./hooks";

export const SearchWriters = async () => {
  const writers = await useWriters();
  return <SearchWritersPresentation writers={writers} />;
};
