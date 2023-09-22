import { ArticleList } from "@/features/ArticleList";
import { SearchTags } from "@/features/SearchTags";
import { SearchWriters } from "@/features/SearchWriters";

type Props = {
  tag?: string;
  writer?: string;
};

export const ArticleListScreen: React.FC<Props> = async ({ tag, writer }) => {
  return (
    <main className="my-70 flex justify-center gap-90 md:my-90">
      <ArticleList tag={tag} writer={writer} />
      <div className="sticky top-[16px] hidden h-fit flex-col gap-60 lg:flex">
        <SearchTags />
        <SearchWriters />
      </div>
    </main>
  );
};
