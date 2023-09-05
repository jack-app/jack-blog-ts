import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
};

export const Writer: React.FC<Props> = ({ name, image }) => {
  return (
    <div className="flex items-center gap-30">
      <Image
        src={image}
        alt={name}
        width={24}
        height={24}
        style={{
          borderRadius: "50%",
        }}
      />
      <span className="text-detail1">{name}</span>
    </div>
  );
};
