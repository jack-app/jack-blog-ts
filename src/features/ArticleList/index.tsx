import React from "react";
import { useArticles } from "./hooks";
import { ArticleListPresentation } from "./presentations/";

type Props = {
  tag?: string;
  writer?: string;
};

export const ArticleList: React.FC<Props> = async ({ tag, writer }) => {
  const articles = await useArticles(tag, writer);
  return <ArticleListPresentation articles={articles} tag={tag} writer={writer} />;
};
