import React from "react";
import Image from "next/image";
import { Tag, Props as TagProps } from "@/ui/Tag";

export type Tag = TagProps & {
  id: string;
};

export type Props = {
  imageUrl?: string;
  title: string;
  tags: Tag[];
};

export const ArticleCardListItemPresentation: React.FC<Props> = ({
  imageUrl = "/OrangeLogo.png",
  title,
  tags,
}) => {
  return (
    <article className="w-full max-w-[360px] rounded-lg bg-white drop-shadow">
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          objectFit="cover"
          style={{
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        />
      </div>
      <div className="flex flex-col gap-40 p-50">
        <h3>{title}</h3>
        <ul className="flex gap-30">
          {tags.map((tag) => (
            <li key={tag.id}>
              <Tag name={tag.name} color={tag.color} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
