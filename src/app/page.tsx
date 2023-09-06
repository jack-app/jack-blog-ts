import { getDatabase } from "@/utils/notion";
import { ArticleList } from "@/features/ArticleList";
import { SearchTags, Tag } from "@/components/SearchTags";
import { SearchWriters } from "@/features/SearchWriters";

export default async function Home({
  searchParams,
}: {
  searchParams: { tag: string; writer: string };
}) {
  const fetchAllTags = async () => {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const articleDb = await getDatabase(databaseId);

    const results = articleDb
      .filter((article: any) => {
        return article.properties.Publish.checkbox === true;
      })
      .map((article: any) => {
        return article.properties.tag.multi_select;
      })
      .flat();

    const uniqueTags = results.filter(
      (tag: any, index: number, self: any) => self.findIndex((t: any) => t.id === tag.id) === index
    );

    return uniqueTags as Tag[];
  };

  const tags = await fetchAllTags();

  return (
    <main className="my-90 flex justify-center gap-90">
      <ArticleList tag={searchParams.tag} writer={searchParams.writer} />
      <div className="flex flex-col gap-60">
        <SearchTags tags={tags} />
        <SearchWriters />
      </div>
    </main>
  );
}
