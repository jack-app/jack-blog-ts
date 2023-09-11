import React, { Fragment } from "react";
import { getBlocks } from "@/utils/notion";
import { renderBlock } from "./hooks/renderBlock";
import { ArticleDetailBodyPresentation } from "./presentations/";

type Props = {
  id: string;
};

export const ArticleDetailBody: React.FC<Props> = async ({ id }) => {
  const blocks = await getBlocks(id);

  return (
    <ArticleDetailBodyPresentation>
      {blocks.map((block: any) => (
        <Fragment key={block.id}>{renderBlock(block, id)}</Fragment>
      ))}
    </ArticleDetailBodyPresentation>
  );
};
