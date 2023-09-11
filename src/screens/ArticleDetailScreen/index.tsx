import { ArticleDetailHeader } from "@/features/ArticleDetailHeader";
import { ArticleDetailBody } from "@/features/ArticleDetailBody";

type Props = {
  id: string;
};

export const ArticleDetailScreen: React.FC<Props> = ({ id }) => {
  return (
    <main className="my-90 flex flex-col items-center gap-80">
      <ArticleDetailHeader id={id} />
      <ArticleDetailBody id={id} />
    </main>
  );
};
