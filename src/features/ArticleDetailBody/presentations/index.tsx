import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ArticleDetailBodyPresentation: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex w-full max-w-[848px] flex-col gap-60 bg-white px-50 py-70 sm:px-80 md:rounded-3xl md:px-110 md:py-100 md:drop-shadow-sm [&>*]:min-w-0">
      {children}
    </section>
  );
};
