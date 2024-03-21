import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/ui/Footer";
import { Header } from "@/ui/Header";
import { Notification } from "@/ui/Notification";
import type { Metadata } from "next";

const title = "jack blog";
const description = "アプリ開発団体jackのブログサイトです。";
const image = {
  url: "/ogp.png",
  width: 1200,
  height: 600,
  alt: "jack blog",
};

export const metadata: Metadata = {
  title: {
    template: "%s | jack blog",
    default: title,
  },
  description: "アプリ開発団体jackのブログサイトです。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://jackun-blog.vercel.app/",
    siteName: title,
    title: title,
    description: "アプリ開発団体jackのブログサイトです。",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [image],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <Header />
        <Notification
          title="サイト移転のお知らせ"
          description="jack-webは下記のアドレスに移動しました"
          link="https://www.jackun?????.com" />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
