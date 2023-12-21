import React from "react";
import { useWriters } from "./hooks";
import { WriterListPresentation } from "./presentations/";

export const WriterList: React.FC = async () => {
  const writers = await useWriters();
  return <WriterListPresentation writers={writers} />;
};
