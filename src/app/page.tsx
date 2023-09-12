import { Metadata } from "next";
import { ArticleListScreen } from "@/screens/ArticleListScreen";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <ArticleListScreen />;
}
