import React from "react";
import { ArticleListItem, Props as ArticleCardListItemPresentationProps } from "./ArticleListItem";

type Props = {
  articles: ArticleCardListItemPresentationProps[];
};

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <div className="grid w-[744px] grid-cols-2 gap-x-60 gap-y-70">
      {articles.map((article) => (
        <ArticleListItem key={article.id} {...article} />
      ))}
    </div>
  );
};
