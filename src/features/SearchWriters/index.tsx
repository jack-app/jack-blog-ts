import React from "react";
import { getAllWriters } from "@/utils/getAllWriters";
import { SearchWritersPresentation } from "./presentations/";

export const SearchWriters = async () => {
  const writers = await getAllWriters();
  return <SearchWritersPresentation writers={writers} />;
};
