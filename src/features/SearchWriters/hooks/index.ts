import { getDatabase } from "@/utils/notion";
import { Props as WriterProps } from "@/ui/Writer";

export const useWriters = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const results = articleDb
    .filter((article: any) => {
      return article.properties.Publish.checkbox === true;
    })
    .map((article: any) => {
      return {
        name: article.properties.Writer.created_by.name,
        image: article.properties.Writer.created_by.avatar_url,
      };
    });

  const uniqueWriters = results.filter(
    (writer: any, index: number, self: any) =>
      self.findIndex((w: any) => w.name === writer.name) === index
  );

  return uniqueWriters as WriterProps[];
};
