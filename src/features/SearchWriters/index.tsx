import React from "react";
import { useWriters } from "./hooks";
import { SearchWritersPresentation } from "./presentations/";

export const SearchWriters = async () => {
  const writers = await useWriters();
  return <SearchWritersPresentation writers={writers} />;
};
