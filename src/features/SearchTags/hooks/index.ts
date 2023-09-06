import { getDatabase } from "@/utils/notion";
import { Tag } from "../presentations";

export const useTags = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const results = articleDb
    .filter((article: any) => {
      return article.properties.Publish.checkbox === true;
    })
    .map((article: any) => {
      return article.properties.tag.multi_select;
    })
    .flat();

  const uniqueTags = results.filter(
    (tag: any, index: number, self: any) => self.findIndex((t: any) => t.id === tag.id) === index
  );

  return uniqueTags as Tag[];
};
