import { Metadata } from "next";
import { ImageResponse } from "next/server";
import { ArticleDetailScreen } from "@/screens/ArticleDetailScreen";
import { getDatabase } from "@/utils/notion";
import { getPage } from "@/utils/notion";

/**
 * OGP画像を生成するための処理
 * https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-image-generation
 * edgeのランタイムで実行する必要があるが、fsが使えないエラーがでる。要調査。
 */
// export const runtime = "edge";
export async function GET({ params }: { params: { id: string } }) {
  const page: any = await getPage(params.id);

  const title = page.properties.Name.title[0].plain_text;
  const writerName = page.properties.Writer.created_by.name;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          backgroundImage: "linear-gradient(90deg, #FFC121, #FF5E2C)",
          color: "white",
          fontFamily: '"Avenir", "hiragino kaku gothic pro", "sans-serif"',
        }}
      >
        <div style={{ fontSize: "32px" }}>{title}</div>
        <div style={{ fontSize: "20px" }}>@{writerName}</div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const page: any = await getPage(params.id);

  const title = page.properties.Name.title[0].plain_text;

  return {
    title: title,
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
