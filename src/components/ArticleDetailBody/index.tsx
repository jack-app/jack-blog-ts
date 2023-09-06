import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ArticleDetailBody: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex max-w-[720px] flex-col gap-60 rounded-2xl bg-white px-70 py-90 shadow-md">
      {children}
    </section>
  );
};
