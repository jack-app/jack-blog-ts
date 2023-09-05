import { getPage, getBlocks } from "@/utils/notion";

export const useArticleDetail = (pageId: string) => {
  const page = getPage(pageId);
  const blocks = getBlocks(pageId);

  return { page, blocks };
};
