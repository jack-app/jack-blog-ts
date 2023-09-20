import { renderNestedList } from "@/features/ArticleDetailBody/hooks/renderNestedList";
import { Text } from "@/features/ArticleDetailBody/hooks/renderText";
import { Block, RichText } from "@/types/block";

type Props = {
  block: Block;
  richText: RichText;
  pageId: string;
};

export const ListItem: React.FC<Props> = ({ block, richText, pageId }) => {
  return (
    <li key={block.id}>
      <Text text={richText} />
      {block.has_children && renderNestedList(block, pageId)}
    </li>
  );
};
