import React from "react";
import { useArticles } from "./hooks";
import { SuggestArticleListPresentation } from "./presentations/";

export const SuggestArticleList = async () => {
  const articles = await useArticles();
  return <SuggestArticleListPresentation articles={articles} />;
};
