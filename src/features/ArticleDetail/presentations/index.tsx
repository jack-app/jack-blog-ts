import React from "react";
import { ArticleDetailHeaderPresentation } from "./header";

type Props = {
  title: string;
  writerName: string;
  writerImage: string;
};

export const ArticleDetailPresentation: React.FC<Props> = ({ title, writerName, writerImage }) => {
  return (
    <div>
      <ArticleDetailHeaderPresentation
        title={title}
        writerName={writerName}
        writerImage={writerImage}
      />
    </div>
  );
};
