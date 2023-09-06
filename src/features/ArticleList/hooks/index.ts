import { getDatabase } from "@/utils/notion";
import { Props as ArticleListItemProps } from "../presentations/ArticleListItem";

export const useArticles = async (tag: string, writer: string) => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const results = articleDb
    .filter((article: any) => {
      const isPublished = article.properties.Publish.checkbox === true;
      const hasTag = article.properties.tag.multi_select.some((tag: any) => {
        return tag.name === tag;
      });
      const hasWriter = article.properties.Writer.created_by.name === writer;
      if (tag) return isPublished && hasTag;
      if (writer) return isPublished && hasWriter;
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
