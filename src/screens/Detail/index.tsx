import { ArticleDetailHeader } from "@/features/ArticleDetailHeader";
import { ArticleDetailBody } from "@/features/ArticleDetailBody";

type Props = {
  id: string;
};

export const DetailScreen: React.FC<Props> = ({ id }) => {
  return (
    <main className="my-90 flex flex-col items-center gap-110">
      <ArticleDetailHeader id={id} />
      <ArticleDetailBody id={id} />
    </main>
  );
};
