import React from "react";
import { Props as ArticleListItemProps, ArticleListItemPresentation } from "./ArticleListItem";

type Props = {
  articles: ArticleListItemProps[];
};

export const ArticleListPresentation: React.FC<Props> = ({ articles }) => {
  return (
    <div className="grid w-[744px] grid-cols-2 gap-x-60 gap-y-70">
      {articles.map((article) => (
        <ArticleListItemPresentation key={article.id} {...article} />
      ))}
    </div>
  );
};
