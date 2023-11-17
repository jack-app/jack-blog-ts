import { Metadata } from "next";
import { ArticleDetailScreen } from "@/screens/ArticleDetailScreen";
import createOGPImage from "@/utils/createOGPImage";
import { getDatabase } from "@/utils/notion";
import { getPage } from "@/utils/notion";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const page: any = await getPage(params.id);

  const title = page.properties.Name.title[0].plain_text;
  const writerName = page.properties.Writer.created_by.name;
  const description = "アプリ開発団体jackのブログサイトです。";

  const ogpPath = await createOGPImage(params.id, title, writerName);

  return {
    title,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: "https://jackun-blog.vercel.app/",
      siteName: title,
      title: title,
      description: description,
      images: [ogpPath],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogpPath],
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
