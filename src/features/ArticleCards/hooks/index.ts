import { getDatabase } from "@/utils/notion";

export const useGetArticles = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articles = await getDatabase(databaseId);

  return articles;
};
