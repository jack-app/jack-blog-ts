import { Metadata } from "next";
import satori from "satori";
import { ArticleDetailScreen } from "@/screens/ArticleDetailScreen";
import { getDatabase } from "@/utils/notion";
import { getPage } from "@/utils/notion";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const page: any = await getPage(params.id);

  const title = page.properties.Name.title[0].plain_text;
  const writerName = page.properties.Writer.created_by.name;
  const description = "アプリ開発団体jackのブログサイトです。";

  // ogp画像を動的に生成。
  // Next.jsのデフォルトでサポートされているが、edgeランタイムで使用するとエラーになるため、satoriを使用。
  const svg = await satori(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(90deg, #FFC121, #FF5E2C)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          gap: "16px",
          backgroundColor: "#FFFCF2",
          color: "#484335",
          width: "90%",
          height: "85%",
          padding: "32px",
        }}
      >
        <div style={{ fontSize: "32px" }}>{title}</div>
        <div style={{ fontSize: "20px" }}>@{writerName}</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 600,
      fonts: [],
    }
  );

  return {
    title,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: "https://jackun-blog.vercel.app/",
      siteName: title,
      title: title,
      description: description,
      images: [svg],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [svg],
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
      return {
        id: article.id,
      };
    });

  return results;
}

export default function Page({ params }: { params: { id: string } }) {
  return <ArticleDetailScreen id={params.id} />;
}
