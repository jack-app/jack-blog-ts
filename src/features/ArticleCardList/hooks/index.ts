import { getDatabase } from "@/utils/notion";
import { Props as ArticleCardListItemPresentationProps } from "../presentations/ArticleCardListItem";

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

  return results as ArticleCardListItemPresentationProps[];
};

let articles: ArticleCardListItemPresentationProps[] | undefined;

export const useArticles = () => {
  if (articles === undefined) {
    throw fetchArticles().then((results) => {
      articles = results;
    });
  }

  return articles;
};
