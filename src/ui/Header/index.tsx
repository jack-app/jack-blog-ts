import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative aspect-[4/1] max-h-[400px] w-full">
      <div className="absolute top-1/2 z-20 translate-y-[-50%] pl-[5%]">
        <Link
          href="/"
          className=" font-['Inter'] text-[24px] font-thin tracking-widest text-white md:text-[32px]"
        >
          jack blog
        </Link>
        <div className="pt-50 text-[16px] text-white md:pt-60 md:text-[20px]">
          アプリ開発団体jack メンバーズブログ
        </div>
      </div>
      <div className="absolute z-10 h-full max-h-[400px] w-full bg-gradient-to-r from-primary-500 to-primary-900 opacity-90" />
      <img src="/HeaderBackground.png" alt="header" className="max-h-[400px] w-full" />
    </header>
  );
};
