import { getPage, getBlocks } from "@/utils/notion";
import { Props as ArticleDetailHeaderProps } from "../presentations/header";

const fetchArticleHeader = async (pageId: string) => {
  const page: any = await getPage(pageId);

  return {
    title: page.properties.Name.title[0].plain_text,
    writerImage: page.properties.Writer.created_by.avatar_url,
    writerName: page.properties.Writer.created_by.name,
  } as ArticleDetailHeaderProps;
};

let pageHeader: ArticleDetailHeaderProps | undefined;

export const useArticleHeader = (pageId: string) => {
  if (pageHeader === undefined) {
    throw fetchArticleHeader(pageId).then((result) => {
      pageHeader = result;
    });
  }

  return pageHeader;
};
