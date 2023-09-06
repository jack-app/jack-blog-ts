import React from "react";
import { ArticleDetailHeader } from "@/components/ArticleDetailHeader";
import { ArticleDetailBody } from "@/components/ArticleDetailBody";

type Props = {
  title: string;
  writerName: string;
  writerImage: string;
  blocks: any;
};

export const ArticleDetailScreen: React.FC<Props> = ({
  title,
  writerName,
  writerImage,
  blocks,
}) => {
  return (
    <main>
      <ArticleDetailHeader title={title} writerName={writerName} writerImage={writerImage} />
      <ArticleDetailBody blocks={blocks} />
    </main>
  );
};
