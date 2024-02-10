import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="relative aspect-[4/1] h-[48px] max-h-[400px] w-full lg:h-auto">
      <div className="absolute top-1/2 z-20 translate-y-[-50%] pl-[5%]">
        <Link
          href="/"
          className="font-['Inter'] text-[16px] font-thin text-white lg:text-[32px] lg:tracking-widest"
        >
          jack blog
        </Link>
        <div className="hidden pt-50 text-[16px] text-white md:pt-60 lg:block lg:text-[20px]">
          アプリ開発団体jack メンバーズブログ
        </div>
      </div>
      <div className="absolute right-0 top-1/4 z-20 pr-[5%] text-white lg:hidden">
        <Link href="/writer">作者一覧</Link>
      </div>

      <div className="absolute z-10 h-full max-h-[400px] w-full bg-[#FFA61F] lg:bg-gradient-to-r lg:from-primary lg:to-secondary lg:opacity-90" />
      <img
        src="/HeaderBackground.png"
        alt="header"
        className="hidden aspect-[4/1] h-[48px] max-h-[400px] w-full lg:block lg:h-auto lg:object-cover"
      />
    </header>
  );
};
