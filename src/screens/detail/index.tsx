import React from "react";
import { ArticleDetail } from "@/features/ArticleDetail";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  id: string;
};

export const ArticleDetailScreen: React.FC<Props> = ({ id }) => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<div>error</div>}>
          <ArticleDetail id={id} />
        </ErrorBoundary>
      </Suspense>
    </main>
  );
};
