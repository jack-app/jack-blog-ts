import React from "react";
import { ArticleCardListPresentation } from "./presentations";
import { useArticles } from "./hooks";

// TODO: screenから、pagination用のlimit, pageを取得。また、検索用のtag, writerを取得。
type Props = {};

export const ArticleCardList: React.FC<Props> = (props) => {
  const articles = useArticles();

  return <ArticleCardListPresentation items={articles} />;
};
