import React from "react";
import { ArticleDetailHeaderPresentation } from "./header";

type Props = {};

export const ArticleDetailPresentation: React.FC<Props> = (props) => {
  return (
    <div>
      <ArticleDetailHeaderPresentation
        title="記事のタイトル"
        writerName="マロン"
        writerImage="https://placehold.jp/150x150.png"
      />
    </div>
  );
};
