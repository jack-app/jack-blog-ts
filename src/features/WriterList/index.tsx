import React from "react";
import { getAllWriters } from "@/utils/getAllWriters";
import { WriterListPresentation } from "./presentations/";

export const WriterList: React.FC = async () => {
  const writers = await getAllWriters();
  return <WriterListPresentation writers={writers} />;
};
