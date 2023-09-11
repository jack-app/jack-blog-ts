import React from "react";
import { useTags } from "./hooks";
import { SearchTagsPresentation } from "./presentations/";

export const SearchTags = async () => {
  const tags = await useTags();
  return <SearchTagsPresentation tags={tags} />;
};
