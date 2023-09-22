import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="relative aspect-[4/1] h-[48px] max-h-[400px] w-full sm:h-auto">
      <div className="absolute top-1/2 z-20 translate-y-[-50%] pl-[5%]">
        <Link
          href="/"
          className="font-['Inter'] text-[16px] font-thin text-white sm:text-[24px] sm:tracking-widest md:text-[32px]"
        >
          jack blog
        </Link>
        <div className="hidden pt-50 text-[16px] text-white sm:block md:pt-60 md:text-[20px]">
          アプリ開発団体jack メンバーズブログ
        </div>
      </div>
      <div className="absolute z-10 h-full max-h-[400px] w-full bg-gradient-to-r from-primary to-secondary opacity-90" />
      <img
        src="/HeaderBackground.png"
        alt="header"
        className="h-[48px] max-h-[400px] w-full sm:h-auto"
      />
    </header>
  );
};
