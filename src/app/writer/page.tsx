import { Metadata } from "next";
import { WritersScreen } from "@/screens/WritersScreen";

export const metadata: Metadata = {
  title: "作者一覧 | jack blog",
};

export default function Writer() {
  return <WritersScreen />;
}
