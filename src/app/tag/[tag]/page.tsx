import { HomeScreen } from "@/screens/Home";

export default function Page({ params }: { params: { tag: string } }) {
  params.tag = decodeURIComponent(params.tag); // 日本語のタグをデコード
  return <HomeScreen tag={params.tag} />;
}
