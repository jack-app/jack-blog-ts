import createImage from "@/utils/createImage";
import { getDatabase } from "@/utils/notion";
import { Props as ArticleListItemProps } from "../presentations/ArticleListItem";

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
        let res = {
          id: article.id,
          imageUrl: undefined,
          title: article.properties.Name.title[0].plain_text,
          tags: article.properties.tag.multi_select,
        } as ArticleListItemProps;

        // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
        if (!article.cover) return res;
        if (article.cover.type === "file") {
          res.imageUrl = await createImage(article.id, "cover", article.cover.file.url);
        }
        if (article.cover.type === "external") {
          res.imageUrl = article.cover.external.url;
        }

        return res;
      })
  );

  return results as ArticleListItemProps[];
};
