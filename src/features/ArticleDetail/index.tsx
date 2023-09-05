import React from "react";
import { ArticleDetailPresentation } from "./presentations/";

type Props = {
  id: string;
};

export const ArticleDetail: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};
