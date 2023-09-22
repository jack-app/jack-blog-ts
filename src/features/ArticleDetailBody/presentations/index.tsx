import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ArticleDetailBodyPresentation: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex w-full max-w-[720px] flex-col gap-60 bg-white px-40 py-70 md:rounded-2xl md:px-70 md:py-90 md:drop-shadow-sm">
      {children}
    </section>
  );
};
