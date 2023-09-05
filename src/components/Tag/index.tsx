import React from "react";
import { Color, convertToColor } from "./logics";

export type Props = {
  name: string;
  color: Color;
  isButton?: boolean;
  handleClick?: () => void;
};

export const Tag: React.FC<Props> = ({ name, color, isButton = false, handleClick }) => {
  const colorCode = convertToColor[color];

  return isButton ? (
    <button
      className="rounded px-20 py-10 text-detail2 text-white hover:opacity-80 active:opacity-60"
      style={{
        backgroundColor: colorCode,
      }}
      onClick={handleClick}
    >
      {name}
    </button>
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
