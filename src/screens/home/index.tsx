import { ArticleCardList } from "@/features/ArticleCardList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const HomeScreen = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<div>error</div>}>
          <ArticleCardList />
        </ErrorBoundary>
      </Suspense>
    </main>
  );
};
