import React from "react";
import { ArticleDetailHeader } from "@/components/ArticleDetailHeader";

type Props = {
  title: string;
  writerName: string;
  writerImage: string;
};

export const ArticleDetailScreen: React.FC<Props> = ({ title, writerName, writerImage }) => {
  return (
    <main>
      <ArticleDetailHeader title={title} writerName={writerName} writerImage={writerImage} />
    </main>
  );
};
