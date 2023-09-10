import { HomeScreen } from "@/screens/Home";
import { getDatabase } from "@/utils/notion";

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
    return {
      params: {
        writer: encodeURIComponent(writer),
      },
    };
  });
}

export default function Page({ params }: { params: { writer: string } }) {
  params.writer = decodeURIComponent(params.writer); // 日本語のWriterをデコード
  return <HomeScreen writer={params.writer} />;
}
