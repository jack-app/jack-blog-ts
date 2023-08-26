import React from "react";
import Image from "next/image";

type Tag = {
  id: string;
  name: string;
  color: string;
};

type Props = {
  imageUrl?: string;
  title: string;
  tags: Tag[];
};

export const ArticleCardsPresentation: React.FC<Props> = ({
  imageUrl = "https://placehold.jp/360x240.png",
  title,
  tags,
}) => {
  return (
    <div className="bg-white max-w-[360px] w-full">
      <div className="w-full aspect-[3/2] relative">
        <Image src={imageUrl} alt={title} fill />
      </div>
      <div className="p-50 flex flex-col gap-40">
        <h3>{title}</h3>
        <ul className="flex gap-30">
          {tags.map((tag) => (
            <li key={tag.id} className="text-detail2">
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
