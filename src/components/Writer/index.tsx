import React from "react";

type Props = {
  name: string;
  image: string;
};

export const Writer: React.FC<Props> = ({ name, image }) => {
  return (
    <div className="flex items-center gap-30">
      <img
        src={image}
        alt={name}
        width={24}
        height={24}
        className="h-[24px] w-[24px] rounded-full object-cover"
      />
      <span className="text-detail1">{name}</span>
    </div>
  );
};
