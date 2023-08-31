import React from "react";
import Image from "next/image";
import { Tag, Props as TagProps } from "@/ui/Tag";
import Link from "next/link";

export type Tag = TagProps & {
  id: string;
};

export type Props = {
  id: string;
  imageUrl?: string;
  title: string;
  tags: Tag[];
};

export const ArticleCardListItemPresentation: React.FC<Props> = ({
  id,
  imageUrl = "/OrangeLogo.png",
  title,
  tags,
}) => {
  return (
    <article className="relative w-full max-w-[360px] rounded-lg bg-white drop-shadow transition hover:drop-shadow-xl">
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
        <h3>
          <Link
            href={`/${id}`}
            className="before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0"
          >
            {title}
          </Link>
        </h3>
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
