import React from "react";
import { Props as ArticleListItemProps, ArticleListItem } from "@/ui/ArticleListItem";

type Props = {
  articles: ArticleListItemProps[];
};

export const SuggestArticleListPresentation: React.FC<Props> = ({ articles }) => {
  return (
    <div className="flex flex-col gap-70">
      <h2>おすすめ記事</h2>
      <div className="grid max-w-[744px] justify-center gap-50 md:grid-cols-2 md:gap-x-60 md:gap-y-70">
        {articles.map((article) => (
          <ArticleListItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
