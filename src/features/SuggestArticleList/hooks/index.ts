import { Props as ArticleListItemProps } from "@/ui/ArticleListItem";
import createImage from "@/utils/createImage";
import createOGPImage from "@/utils/createOGPImage";
import { getDatabase } from "@/utils/notion";

export const useArticles = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const publicArticles = await Promise.all(
    articleDb
      .filter((article: any) => {
        const isPublished = article.properties.Publish.checkbox === true;
        return isPublished;
      })
      .map(async (article: any) => {
        let res = {
          id: article.id,
          imageUrl: undefined,
          title: article.properties.Name.title[0].plain_text,
          tags: article.properties.tag.multi_select,
          publishDate: undefined,
        } as ArticleListItemProps;

        // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
        if (!article.cover) {
          res.imageUrl = await createOGPImage(
            article.id,
            article.properties.Name.title[0].plain_text,
            article.properties.Writer.created_by.name
          );
        } else if (article.cover.type === "file") {
          res.imageUrl = await createImage(article.id, "cover", article.cover.file.url);
        } else if (article.cover.type === "external") {
          res.imageUrl = article.cover.external.url;
        }

        // アドベントカレンダーの記事があれば、何日の記事かを追加する
        if (
          article.properties.tag.multi_select.some(
            (tag: any) => tag.name === "アドベントカレンダー"
          )
        ) {
          res.publishDate = article.properties.Publish_Date.date
            ? article.properties.Publish_Date.date.start
            : undefined;
        }

        return res;
      })
  );

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const tmp = Math.floor(Math.random() * (i + 1));
      [array[i], array[tmp]] = [array[tmp], array[i]];
    }
    return array;
  };

  const suggestLength = 4;
  const results = shuffleArray(publicArticles).slice(0, suggestLength);

  return results as ArticleListItemProps[];
};
