import { getPage } from "@/utils/notion";
import { Props as ArticleDetailHeaderProps } from "../presentations";

export const useArticleHeader = async (pageId: string) => {
  const page: any = await getPage(pageId);

  let res = {
    title: page.properties.Name.title[0].plain_text,
    writerImage: page.properties.Writer.created_by.avatar_url,
    writerName: page.properties.Writer.created_by.name,
    tags: page.properties.tag.multi_select,
    publishDate: page.properties.Publish_Date.date
      ? page.properties.Publish_Date.date.start
      : page.created_time.slice(0, 10),
  } as ArticleDetailHeaderProps;

  return res;
};
