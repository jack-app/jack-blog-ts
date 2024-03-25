import { Props as ArticleListItemProps } from "@/ui/ArticleListItem";
import createImage from "@/utils/createImage";
import createOGPImage from "@/utils/createOGPImage";
import { getDatabase } from "@/utils/notion";

/* 
公開中の全ての記事を取得する関数
tag名、writer名を指定すると、その条件に合致する記事を取得する
**/
type UseGetArticles = (tagParam?: string, writerParam?: string) => Promise<ArticleListItemProps[]>;

export const useGetArticles: UseGetArticles = async (tagParam?: string, writerParam?: string) => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const currentDate = new Date().toISOString().slice(0, 10);

  const articles = await Promise.all(
    articleDb
      .filter((article: any) => {
        if (
          article.properties.Publish_Date.date &&
          article.properties.Publish_Date.date.start > currentDate
        )
          return false;

        const isPublished = article.properties.Publish.checkbox === true;
        const hasTag = article.properties.tag.multi_select.some((tag: any) => {
          return tag.name === tagParam;
        });
        const hasWriter = article.properties.Writer.created_by.name === writerParam;

        if (tagParam) return isPublished && hasTag;
        if (writerParam) return isPublished && hasWriter;
        return isPublished;
      })
      .map(async (article: any) => {
        let res = {
          id: article.id,
          imageUrl: undefined,
          title: article.properties.Name.title[0].plain_text,
          tags: article.properties.tag.multi_select,
          publishDate: article.properties.Publish_Date.date
            ? article.properties.Publish_Date.date.start
            : article.created_time.slice(0, 10),
        } as ArticleListItemProps;

        // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
        if (!article.cover) {
          res.imageUrl = await createOGPImage(
            article.id,
            article.properties.Name.title[0].plain_text,
            article.properties.Writer.created_by.name
          );
        } else if (article.cover.type === "file") {
          res.imageUrl = await createImage(article.id, "cover", article.cover.file.url);
        } else if (article.cover.type === "external") {
          res.imageUrl = article.cover.external.url;
        }

        return res;
      })
  );

  const results = articles.sort((a, b) => {
    return a.publishDate < b.publishDate ? 1 : -1;
  });

  return results as ArticleListItemProps[];
};
