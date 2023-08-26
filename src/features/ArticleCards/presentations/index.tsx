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
  imageUrl = "https://placehold.jp/100x100.png",
  title,
  tags,
}) => {
  return (
    <div>
      <Image src={imageUrl} alt={title} width={100} height={100} />
      <h3>{title}</h3>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
};
