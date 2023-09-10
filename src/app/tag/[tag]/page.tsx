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
      return article.properties.tag.multi_select.name;
    })
    .flat();

  const uniqueResults = [...new Set(results)];

  return uniqueResults.map((tag) => {
    return {
      params: {
        tag: encodeURIComponent(tag),
      },
    };
  });
}

export default function Page({ params }: { params: { tag: string } }) {
  params.tag = decodeURIComponent(params.tag); // 日本語のタグをデコード
  return <HomeScreen tag={params.tag} />;
}
