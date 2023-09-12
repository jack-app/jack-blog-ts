import { Metadata } from "next";
import { ArticleListScreen } from "@/screens/ArticleListScreen";
import { getDatabase } from "@/utils/notion";

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag);
  const title = `${tag}に関する記事一覧`;
  return {
    title,
    openGraph: {
      title,
    },
    twitter: {
      title: title,
    },
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
      return article.properties.tag.multi_select;
    })
    .flat();

  const tagNames = results.map((tag: any) => {
    return tag.name;
  });

  const uniqueTagNames = [...new Set(tagNames)];

  return uniqueTagNames.map((tag) => {
    return { tag };
  });
}

export default function Page({ params }: { params: { tag: string } }) {
  params.tag = decodeURIComponent(params.tag); // 日本語のタグをデコード
  return <ArticleListScreen tag={params.tag} />;
}
