import Link from "next/link";
import React from "react";
import { Tag, Props as TagProps } from "@/ui/Tag";

export type Tag = TagProps & {
  id: string;
};

export type Props = {
  id: string;
  imageUrl?: string;
  title: string;
  tags: Tag[];
};

export const ArticleListItem: React.FC<Props> = ({
  id,
  imageUrl = "/OrangeLogo.png",
  title,
  tags,
}) => {
  return (
    <article className="relative w-full max-w-[360px] rounded-lg bg-white drop-shadow transition hover:drop-shadow-xl">
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt={title}
          sizes="(max-width: 360px) 100vw, 360px"
          className="h-[189px] w-[360px] rounded-t-lg object-cover"
        />
      </div>
      <div className="flex h-[calc(100%-189px)] flex-col justify-between gap-30 p-60">
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
