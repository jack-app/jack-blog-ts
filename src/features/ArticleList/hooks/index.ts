import { Props as ArticleListItemProps } from "@/ui/ArticleListItem";
import createImage from "@/utils/createImage";
import createOGPImage from "@/utils/createOGPImage";
import { getDatabase } from "@/utils/notion";

export const useArticles = async (tagParam?: string, writerParam?: string) => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const results = await Promise.all(
    articleDb
      .filter((article: any) => {
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
        console.log(article.properties);
        let res = {
          id: article.id,
          imageUrl: undefined,
          title: article.properties.Name.title[0].plain_text,
          tags: article.properties.tag.multi_select,
          isAdventCalender: false,
          publishDate: article.properties.Publish_Date.date
            ? article.properties.Publish_Date.date.start
            : undefined,
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

  return results as ArticleListItemProps[];
};
