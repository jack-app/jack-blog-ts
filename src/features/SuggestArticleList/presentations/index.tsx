import React from "react";
import { Props as ArticleListItemProps, ArticleListItem } from "@/ui/ArticleListItem";

type Props = {
  articles: ArticleListItemProps[];
};

export const SuggestArticleListPresentation: React.FC<Props> = ({ articles }) => {
  return (
    <div className="flex flex-col gap-70">
      <h2>おすすめ記事</h2>
      <div className="grid justify-center gap-50 sm:grid-cols-2 sm:gap-x-60 sm:gap-y-70">
        {articles.map((article) => (
          <ArticleListItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
