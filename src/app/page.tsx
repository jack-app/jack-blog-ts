import { getDatabase } from "@/utils/notion";
import { Props as ArticleListItemProps } from "@/components/ArticleList/ArticleListItem";
import { ArticleList } from "@/components/ArticleList";
import { SearchTags, Tag } from "@/components/SearchTags";
import { SearchWriters } from "@/features/SearchWriters";

export default async function Home({
  searchParams,
}: {
  searchParams: { tag: string; writer: string };
}) {
  const fetchArticles = async () => {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const articleDb = await getDatabase(databaseId);

    const results = articleDb
      .filter((article: any) => {
        const isPublished = article.properties.Publish.checkbox === true;
        const hasTag = article.properties.tag.multi_select.some((tag: any) => {
          return tag.name === searchParams.tag;
        });
        const hasWriter = article.properties.Writer.created_by.name === searchParams.writer;
        if (searchParams.tag) return isPublished && hasTag;
        if (searchParams.writer) return isPublished && hasWriter;
        return isPublished;
      })
      .map((article: any) => {
        return {
          id: article.id,
          imageUrl: article.cover ? article.cover.file.url : undefined,
          title: article.properties.Name.title[0].plain_text,
          tags: article.properties.tag.multi_select,
        };
      });

    return results as ArticleListItemProps[];
  };

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

  const articles = await fetchArticles();
  const tags = await fetchAllTags();

  return (
    <main className="my-90 flex justify-center gap-90">
      <ArticleList articles={articles} />
      <div className="flex flex-col gap-60">
        <SearchTags tags={tags} />
        <SearchWriters />
      </div>
    </main>
  );
}
