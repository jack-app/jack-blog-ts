import { ArticleCardList } from "@/features/ArticleCardList";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Props as ArticleListItemProps } from "@/features/ArticleCardList/presentations/ArticleCardListItem";

type Props = {
  articles: ArticleListItemProps[];
};

export const HomeScreen: React.FC<Props> = ({ articles }) => {
  return (
    <main>
      <ArticleCardList articles={articles} />
    </main>
  );
};
