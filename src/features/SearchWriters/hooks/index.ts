import { Props as WriterProps } from "@/ui/Writer";
import { getDatabase } from "@/utils/notion";

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

  const uniqueWriters = results
    .reduce((acc: any, curr: any) => {
      const writer = acc.find((w: any) => w.name === curr.name);
      if (writer) {
        writer.number++;
      } else {
        acc.push({ ...curr, number: 1 });
      }
      return acc;
    }, [])
    .sort((a: any, b: any) => b.number - a.number);

  return uniqueWriters as WriterProps[];
};
