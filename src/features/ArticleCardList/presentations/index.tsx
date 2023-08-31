import React from "react";
import {
  ArticleCardListItemPresentation,
  Props as ArticleCardListItemPresentationProps,
} from "./ArticleCardListItem";

export type Item = ArticleCardListItemPresentationProps & {
  id: string;
};

type Props = {
  items: Item[];
};

export const ArticleCardListPresentation: React.FC<Props> = ({ items }) => {
  return (
    <div className="grid w-[744px] grid-cols-2 gap-x-60 gap-y-70">
      {items.map((item) => (
        <ArticleCardListItemPresentation key={item.id} {...item} />
      ))}
    </div>
  );
};
