import React from "react";
import { ArticleCardListPresentation } from "./presentations";
import { useArticles } from "./hooks";

type Props = {};

export const ArticleCardList: React.FC<Props> = (props) => {
  const articles = useArticles();

  return <ArticleCardListPresentation items={articles} />;
};
