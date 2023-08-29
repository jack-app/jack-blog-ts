import { getDatabase } from "@/utils/notion";

export const useGetArticles = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articles = await getDatabase(databaseId);

  const results = articles
    .filter((article: any) => {
      return article.properties.Publish.checkbox === true;
    })
    .map((article: any) => {
      return {
        id: article.id,
        image: article.cover ? article.cover.url : null,
        title: article.properties.Name.title[0].plain_text,
        tags: article.properties.tag.multi_select,
      };
    });

  return results as {
    id: string;
    image: string | null;
    title: string;
    tags: { id: string; name: string; color: string }[];
  }[];
};
