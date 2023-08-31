import { getDatabase } from "@/utils/notion";
import { Item as ArticleType } from "../presentations";

const fetchArticles = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const results = articleDb
    .filter((article: any) => {
      return article.properties.Publish.checkbox === true;
    })
    .map((article: any) => {
      return {
        id: article.id,
        imageUrl: article.cover ? article.cover.file.url : undefined,
        title: article.properties.Name.title[0].plain_text,
        tags: article.properties.tag.multi_select,
      };
    });

  return results as ArticleType[];
};

let articles: ArticleType[] | undefined;

export const useArticles = () => {
  if (articles === undefined) {
    throw fetchArticles().then((results) => {
      articles = results;
    });
  }

  return articles;
};
