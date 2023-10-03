import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ArticleDetailBodyPresentation: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex w-full max-w-[1000px] flex-col gap-60 bg-white px-50 py-70 sm:px-80 md:rounded-2xl md:px-150 md:py-90 md:drop-shadow-sm [&>*]:min-w-0">
      {children}
    </section>
  );
};
