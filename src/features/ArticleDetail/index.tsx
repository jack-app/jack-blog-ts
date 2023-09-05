import React from "react";
import { ArticleDetailPresentation } from "./presentations/";
import { useArticleHeader } from "./hooks";

type Props = {
  id: string;
};

export const ArticleDetail: React.FC<Props> = ({ id }) => {
  const { title, writerName, writerImage } = useArticleHeader(id);
  return (
    <ArticleDetailPresentation title={title} writerName={writerName} writerImage={writerImage} />
  );
};
