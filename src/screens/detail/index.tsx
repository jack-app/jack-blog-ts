import React from "react";
import { ArticleDetail } from "@/features/ArticleDetail";

type Props = {
  id: string;
};

export const ArticleDetailScreen: React.FC<Props> = ({ id }) => {
  return <ArticleDetail id={id} />;
};
