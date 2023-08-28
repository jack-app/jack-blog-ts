import React from "react";
import Image from "next/image";

type Tag = {
  id: string;
  name: string;
  color: string;
};

export type Props = {
  imageUrl?: string;
  title: string;
  tags: Tag[];
};

export const ArticleCardListItemPresentation: React.FC<Props> = ({
  imageUrl = "https://placehold.jp/360x240.png",
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
            <li key={tag.id} className="rounded bg-primary-500 px-20 py-10 text-detail2">
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
