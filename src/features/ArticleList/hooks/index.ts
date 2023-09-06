import { getDatabase } from "@/utils/notion";
import { Props as ArticleListItemProps } from "../presentations/ArticleListItem";

export const useArticles = async (tagParam: string, writerParam: string) => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const results = articleDb
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
    .map((article: any) => {
      return {
        id: article.id,
        imageUrl: article.cover ? article.cover.file.url : undefined,
        title: article.properties.Name.title[0].plain_text,
        tags: article.properties.tag.multi_select,
      };
    });

  return results as ArticleListItemProps[];
};
