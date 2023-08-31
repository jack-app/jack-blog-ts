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
    <div>
      {items.map((item) => (
        <ArticleCardListItemPresentation key={item.id} {...item} />
      ))}
    </div>
  );
};
