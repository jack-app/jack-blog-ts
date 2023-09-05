import { ArticleList } from "@/components/ArticleList";
import React from "react";
import { Props as ArticleListItemProps } from "@/features/ArticleCardList/presentations/ArticleCardListItem";

type Props = {
  articles: ArticleListItemProps[];
};

export const HomeScreen: React.FC<Props> = ({ articles }) => {
  return (
    <main>
      <ArticleList articles={articles} />
    </main>
  );
};
