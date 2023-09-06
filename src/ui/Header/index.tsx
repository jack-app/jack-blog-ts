import React from "react";

export const Header = () => {
  return (
    <header className="relative aspect-[4/1] max-h-[400px] w-full">
      <div className="absolute top-1/2 z-20 translate-y-[-50%] pl-[5%]">
        <div className="pb-60 font-['Inter'] text-[32px] font-thin tracking-widest text-white">
          jack blog
        </div>
        <div className="text-[20px] text-white">アプリ開発団体jack メンバーズブログ</div>
      </div>
      <div className="absolute z-10 h-full max-h-[400px] w-full bg-gradient-to-r from-primary-500 to-primary-900 opacity-90" />
      <img src="/HeaderBackground.png" alt="header" className="max-h-[400px] w-full" />
    </header>
  );
};
