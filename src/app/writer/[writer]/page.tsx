import { Metadata } from "next";
import { ArticleListScreen } from "@/screens/ArticleListScreen";
import { getDatabase } from "@/utils/notion";

export async function generateMetadata({
  params,
}: {
  params: { writer: string };
}): Promise<Metadata> {
  return {
    title: `${decodeURIComponent(params.writer)}による記事一覧`,
  };
}

export async function generateStaticParams() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const results = articleDb
    .filter((article: any) => {
      return article.properties.Publish.checkbox === true;
    })
    .map((article: any) => {
      return article.properties.Writer.created_by.name;
    });

  const uniqueResults = [...new Set(results)];

  return uniqueResults.map((writer) => {
    return { writer };
  });
}

export default function Page({ params }: { params: { writer: string } }) {
  params.writer = decodeURIComponent(params.writer); // 日本語のWriterをデコード
  return <ArticleListScreen writer={params.writer} />;
}
