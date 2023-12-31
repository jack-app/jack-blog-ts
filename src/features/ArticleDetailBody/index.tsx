import React, { Fragment } from "react";
import { Block } from "@/types/block";
import { getBlocks } from "@/utils/notion";
import { renderBlock } from "./hooks/renderBlock";
import { ArticleDetailBodyPresentation } from "./presentations/";

type Props = {
  id: string;
};

export const ArticleDetailBody: React.FC<Props> = async ({ id }) => {
  const blocks = (await getBlocks(id)) as Block[];

  return (
    <ArticleDetailBodyPresentation>
      {blocks.map((block: Block) => (
        <Fragment key={block.id}>{renderBlock(block, id)}</Fragment>
      ))}
    </ArticleDetailBodyPresentation>
  );
};
