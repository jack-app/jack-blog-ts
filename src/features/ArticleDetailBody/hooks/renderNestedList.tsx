import { renderBlock } from "./renderBlock";
import { BulletedListPresentation } from "../presentations/blocks/bulletedList";
import { NumberedListPresentation } from "../presentations/blocks/numberedList";

export const renderNestedList = (block: any, pageId: string) => {
  console.log(block);

  const isNumberedList = block.type === "numbered_list_item";

  if (isNumberedList) {
    return (
      <NumberedListPresentation>
        {block.children.map((block: any) => renderBlock(block, pageId))}
      </NumberedListPresentation>
    );
  }
  return (
    <BulletedListPresentation>
      {block.children.map((block: any) => renderBlock(block, pageId))}
    </BulletedListPresentation>
  );
};
