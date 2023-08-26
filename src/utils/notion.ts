import { Client } from "@notionhq/client";

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: string) => {
  const response = await notionClient.databases.query({
    database_id: databaseId,
  });

  return response.results;
};
