import { Metadata } from "next";
import { ArticleListScreen } from "@/screens/ArticleListScreen";
import { getDatabase } from "@/utils/notion";

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag);
  const title = `${tag}に関する記事一覧`;
  const description = "アプリ開発団体jackのブログサイトです。";
  const image = {
    url: "/ogp.png",
    width: 1200,
    height: 600,
    alt: "jack blog",
  };

  return {
    title,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: "https://jackun-blog.vercel.app/",
      siteName: title,
      title: title,
      description: description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [image],
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
