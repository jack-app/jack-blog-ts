import React from "react";
import { Writer, Props as WriterProps } from "@/ui/Writer";

type Props = {
  writers: WriterProps[];
};

export const WriterListPresentation: React.FC<Props> = ({ writers }) => {
  return (
    <div className="w-fill flex flex-wrap gap-x-40 gap-y-50">
      {writers.map((writer) => (
        <Writer key={writer.name} {...writer} />
      ))}
    </div>
  );
};
