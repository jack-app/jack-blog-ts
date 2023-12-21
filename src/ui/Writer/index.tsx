import Link from "next/link";
import React from "react";

export type Props = {
  name: string;
  image: string;
  number?: number;
};

export const Writer: React.FC<Props> = ({ name, image, number }) => {
  return (
    <Link className="flex w-fit items-center gap-30 hover:underline" href={`/writer/${name}`}>
      <img
        src={image}
        alt={name}
        width={24}
        height={24}
        className="h-[24px] w-[24px] rounded-full object-cover"
      />
      <span className="text-detail1">
        {name} {number && <span>&#40;{number}&#41;</span>}
      </span>
    </Link>
  );
};
