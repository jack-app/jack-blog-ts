import React from "react";
import Link from "next/link";

export type Props = {
  name: string;
  image: string;
};

export const Writer: React.FC<Props> = ({ name, image }) => {
  return (
    <Link className="flex items-center gap-30" href={`/?writer=${name}`}>
      <img
        src={image}
        alt={name}
        width={24}
        height={24}
        className="h-[24px] w-[24px] rounded-full object-cover"
      />
      <span className="text-detail1">{name}</span>
    </Link>
  );
};
