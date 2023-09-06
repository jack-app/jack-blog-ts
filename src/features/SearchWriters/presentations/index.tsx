import React from "react";
import { Writer, Props as WriterProps } from "@/ui/Writer";

type Props = {
  writers: WriterProps[];
};

export const SearchWritersPresentation: React.FC<Props> = ({ writers }) => {
  return (
    <div className="flex max-w-[200px] flex-col gap-50">
      <h3>Writers</h3>
      <div className="flex flex-col gap-30">
        {writers.map((writer) => (
          <Writer key={writer.name} {...writer} />
        ))}
      </div>
    </div>
  );
};
