import { getPage, getBlocks, getDatabase } from "@/utils/notion";
import {
  Props as ArticleDetailHeaderProps,
  ArticleDetailHeader,
} from "@/components/ArticleDetailHeader";
import { renderBlock } from "@/components/ArticleDetailBody/logics/renderBlock";
import { ArticleDetailBody } from "@/components/ArticleDetailBody";

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
  const fetchArticleHeader = async (pageId: string) => {
    const page: any = await getPage(pageId);

    return {
      title: page.properties.Name.title[0].plain_text,
      writerImage: page.properties.Writer.created_by.avatar_url,
      writerName: page.properties.Writer.created_by.name,
    } as ArticleDetailHeaderProps;
  };

  const headerItems = await fetchArticleHeader(params.id);
  const blocks = await getBlocks(params.id);

  return (
    <main className="my-90 flex flex-col items-center gap-110">
      <ArticleDetailHeader {...headerItems} />
      <ArticleDetailBody>
        {blocks.map((block: any) => {
          return renderBlock(block);
        })}
      </ArticleDetailBody>
    </main>
  );
}
