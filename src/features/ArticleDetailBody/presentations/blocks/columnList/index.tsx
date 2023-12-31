import { renderBlock } from "@/features/ArticleDetailBody/hooks/renderBlock";
import { ColumnList, Block } from "@/types/block";
import styles from "./index.module.css";

type Props = {
  columnList?: ColumnList;
  childBlocks?: Block[];
  pageId: string;
};

export const ColumnListPresentation: React.FC<Props> = ({ columnList, childBlocks, pageId }) => {
  if (!columnList) return null;
  return (
    <div className={styles.row}>
      {childBlocks && childBlocks.map((block: any) => renderBlock(block, pageId))}
    </div>
  );
};
