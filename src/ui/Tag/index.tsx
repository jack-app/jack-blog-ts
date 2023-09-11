import Link from "next/link";
import React from "react";
import { Color, convertToColor } from "./logics";

export type Props = {
  name: string;
  color: Color;
  isLink?: boolean;
};

export const Tag: React.FC<Props> = ({ name, color, isLink = false }) => {
  const colorCode = convertToColor[color];

  return isLink ? (
    <Link
      href={`/tag/${name}`}
      className="rounded px-20 py-10 text-detail2 text-white hover:opacity-80 active:opacity-60"
      style={{
        backgroundColor: colorCode,
      }}
    >
      {name}
    </Link>
  ) : (
    <div
      className="w-fit rounded px-20 py-10 text-detail2 text-white"
      style={{
        backgroundColor: colorCode,
      }}
    >
      {name}
    </div>
  );
};
