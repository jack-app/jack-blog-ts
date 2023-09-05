import React from "react";
import { MdOutlineWeb } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary-500 p-20">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-around">
        <div className="flex w-6/12 justify-center">
          <img src="/logo.png" width={100} height={70} alt="logo" />
        </div>
        <div className="flex w-6/12 justify-evenly">
          <a href="https://jack-website.netlify.app/" target="_blank" rel="noopener noreferrer">
            <MdOutlineWeb size={40} color="#fff" />
          </a>
          <a href="https://twitter.com/jackapp_tmy" target="_blank" rel="noopener noreferrer">
            <BsTwitter size={36} color="#fff" />
          </a>
          <a href="mailto:jack.app.tmy@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail size={36} color="#fff" />
          </a>
        </div>
      </div>
      <div className="flex justify-center text-white">&copy;jack 2023</div>
    </footer>
  );
};
