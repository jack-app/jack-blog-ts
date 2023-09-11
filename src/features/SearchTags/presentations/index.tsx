import React from "react";
import { Tag } from "@/ui/Tag";
import { Color } from "@/ui/Tag/logics";

export type Tag = {
  id: string;
  name: string;
  color: Color;
};

type Props = {
  tags: Tag[];
};

export const SearchTagsPresentation: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex max-w-[200px] flex-col gap-50">
      <h3>Tags</h3>
      <div className="flex-start flex flex-wrap gap-x-20 gap-y-30">
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} color={tag.color} isLink />
        ))}
      </div>
    </div>
  );
};
