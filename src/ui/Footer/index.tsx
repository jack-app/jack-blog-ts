import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-white py-80 md:px-100 lg:px-140 lg:py-90">
      <div className="m-auto flex w-full max-w-[1200px] justify-evenly md:justify-between">
        <div className="flex flex-col items-center">
          <Link href="/" passHref>
            <img src="/OrangeLogo.png" alt="logo" className="w-[160px]" />
          </Link>
          <span className="text-detail1 text-subText">&copy;jack 2024</span>
        </div>
        <div className="flex flex-col gap-80 md:flex-row md:gap-110">
          <div className="flex flex-col gap-30">
            <p className="font-bold">リンク</p>
            <div className="flex flex-col gap-20">
              <Link
                href="https://jack-website.netlify.app/"
                className="flex w-fit items-center gap-20 border-b-[1px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>公式サイト</span>
                <FaExternalLinkAlt size={14} />
              </Link>
              <Link
                href="https://twitter.com/jackapp_tmy"
                className="flex w-fit items-center gap-20 border-b-[1px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>公式X(旧Twitter)</span>
                <FaExternalLinkAlt size={14} />
              </Link>
              <Link
                href="https://twitter.com/jack20200001101"
                className="flex w-fit items-center gap-20 border-b-[1px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>新歓用X(旧Twitter)</span>
                <FaExternalLinkAlt size={14} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-30">
            <p className="font-bold">お問い合わせ</p>
            <div className="flex items-center gap-60">
              <Link href="http://line.me/ti/p/@jnm6180c" target="_blank" rel="noopener noreferrer">
                <img src="/line.png" alt="公式LINE" width={40} />
              </Link>
              <Link
                href="https://twitter.com/jackapp_tmy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/x.png" alt="公式Twitter" width={40} />
              </Link>
              <Link href="mailto:jack.app.tmy@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdMailOutline alt="メール" size={48} color="black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
