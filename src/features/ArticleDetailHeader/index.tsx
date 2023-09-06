import React from "react";
import { ArticleDetailHeaderPresentation } from "./presentations/";
import { useArticleHeader } from "./hooks";

type Props = {
  id: string;
};

export const ArticleDetailHeader: React.FC<Props> = async ({ id }) => {
  const data = await useArticleHeader(id);

  return <ArticleDetailHeaderPresentation {...data} />;
};
