import { getPage, getDatabase } from "@/utils/notion";
import { ArticleDetailBody } from "@/features/ArticleDetailBody";
import { ArticleDetailHeader } from "@/features/ArticleDetailHeader";

export async function generateStaticParams() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const results = articleDb
    .filter((article: any) => {
      return article.properties.Publish.checkbox === true;
    })
    .map((article: any) => {
      return {
        id: article.id,
      };
    });

  return results;
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main className="my-90 flex flex-col items-center gap-110">
      <ArticleDetailHeader id={params.id} />
      <ArticleDetailBody id={params.id} />
    </main>
  );
}
