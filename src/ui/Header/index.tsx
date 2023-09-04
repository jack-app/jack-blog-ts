import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titles}>
        <div className={styles.mainTitle}>jack blog</div>
        <div className={styles.subTitle}>アプリ開発団体jack メンバーズブログ</div>
      </div>
      <div className={styles.overlay}></div>
      <Image src="/HeaderBackground.png" alt="header" fill />
    </header>
  );
};
