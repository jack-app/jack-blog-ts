import { Metadata } from "next";
import { ArticleListScreen } from "@/screens/ArticleListScreen";
import { getDatabase } from "@/utils/notion";

export async function generateMetadata({
  params,
}: {
  params: { writer: string };
}): Promise<Metadata> {
  const writer = decodeURIComponent(params.writer);
  const title = `${writer}による記事一覧`;
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
