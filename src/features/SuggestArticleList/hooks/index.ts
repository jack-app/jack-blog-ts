import { Props as ArticleListItemProps } from "@/ui/ArticleListItem";
import { useGetArticles } from "@/utils/useGetArticles";

export const useArticles = async () => {
  const publicArticles = await useGetArticles();

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
