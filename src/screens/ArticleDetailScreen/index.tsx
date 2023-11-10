import { ArticleDetailBody } from "@/features/ArticleDetailBody";
import { ArticleDetailHeader } from "@/features/ArticleDetailHeader";
import { SuggestArticleList } from "@/features/SuggestArticleList";

type Props = {
  id: string;
};

export const ArticleDetailScreen: React.FC<Props> = ({ id }) => {
  return (
    <main className="my-70 flex flex-col items-center gap-60 md:my-90 md:gap-80">
      <ArticleDetailHeader id={id} />
      <ArticleDetailBody id={id} />
      <SuggestArticleList />
    </main>
  );
};
