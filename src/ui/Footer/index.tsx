import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { MdOutlineWeb } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={100} height={70} alt="logo" />
      </div>
      <div className={styles.links}>
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
      <div className={styles.copy}>&copy;jack 2023</div>
    </footer>
  );
};
