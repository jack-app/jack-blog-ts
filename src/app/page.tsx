import { ArticleList } from "@/features/ArticleList";
import { SearchTags } from "@/features/SearchTags";
import { SearchWriters } from "@/features/SearchWriters";

export default async function Home({
  searchParams,
}: {
  searchParams: { tag: string; writer: string };
}) {
  return (
    <main className="my-90 flex justify-center gap-90">
      <ArticleList tag={searchParams.tag} writer={searchParams.writer} />
      <div className="flex flex-col gap-60">
        <SearchTags />
        <SearchWriters />
      </div>
    </main>
  );
}
