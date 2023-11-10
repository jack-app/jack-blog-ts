import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary p-40">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-around">
        <Link href="/" className="flex w-6/12 justify-center" title="home">
          <img src="/logo.png" width={100} height={70} alt="logo" />
        </Link>
        <div className="flex w-6/12 justify-evenly">
          <a
            href="https://jack-website.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="jack公式webサイト"
          >
            <MdOutlineWeb size={40} color="#fff" />
          </a>
          <a
            href="https://twitter.com/jackapp_tmy"
            target="_blank"
            rel="noopener noreferrer"
            title="jack公式twitter"
          >
            <BsTwitter size={36} color="#fff" />
          </a>
          <a
            href="mailto:jack.app.tmy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="メール"
          >
            <MdEmail size={36} color="#fff" />
          </a>
        </div>
      </div>
      <div className="flex justify-center text-white">&copy;jack 2023</div>
    </footer>
  );
};
