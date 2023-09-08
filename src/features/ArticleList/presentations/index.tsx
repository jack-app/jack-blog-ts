import React from "react";
import { Props as ArticleListItemProps, ArticleListItemPresentation } from "./ArticleListItem";

type Props = {
  articles: ArticleListItemProps[];
};

export const ArticleListPresentation: React.FC<Props> = ({ articles }) => {
  return (
    <div className="grid w-[744px] justify-center gap-50 md:grid-cols-2 md:gap-x-60 md:gap-y-70">
      {articles.map((article) => (
        <ArticleListItemPresentation key={article.id} {...article} />
      ))}
    </div>
  );
};
