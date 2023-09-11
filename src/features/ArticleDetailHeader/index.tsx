import React from "react";
import { useArticleHeader } from "./hooks";
import { ArticleDetailHeaderPresentation } from "./presentations/";

type Props = {
  id: string;
};

export const ArticleDetailHeader: React.FC<Props> = async ({ id }) => {
  const data = await useArticleHeader(id);

  return <ArticleDetailHeaderPresentation {...data} />;
};
