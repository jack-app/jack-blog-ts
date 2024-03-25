import Link from "next/link";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Writer, Props as WriterProps } from "@/ui/Writer";

type Props = {
  writers: WriterProps[];
};

export const SearchWritersPresentation: React.FC<Props> = ({ writers }) => {
  return (
    <div className="flex max-w-[200px] flex-col gap-50">
      <h3>Writers</h3>
      <div className="flex flex-col gap-30">
        {writers.slice(0, 6).map((writer) => (
          <Writer key={writer.name} {...writer} />
        ))}
        <Link
          href="/writer"
          className="flex w-fit items-center text-detail1 text-link hover:underline"
        >
          もっと見る
          <MdNavigateNext size={20} />
        </Link>
      </div>
    </div>
  );
};
