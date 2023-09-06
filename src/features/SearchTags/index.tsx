import React from "react";
import { SearchTagsPresentation } from "./presentations/";
import { useTags } from "./hooks";

export const SearchTags = async () => {
  const tags = await useTags();
  return <SearchTagsPresentation tags={tags} />;
};
