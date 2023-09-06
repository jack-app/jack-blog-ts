import { getPage } from "@/utils/notion";
import { Props as ArticleDetailHeaderProps } from "../presentations";

export const useArticleHeader = async (pageId: string) => {
  const page: any = await getPage(pageId);

  return {
    title: page.properties.Name.title[0].plain_text,
    writerImage: page.properties.Writer.created_by.avatar_url,
    writerName: page.properties.Writer.created_by.name,
  } as ArticleDetailHeaderProps;
};
