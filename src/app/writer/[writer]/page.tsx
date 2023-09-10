import { HomeScreen } from "@/screens/Home";

export default function Page({ params }: { params: { writer: string } }) {
  params.writer = decodeURIComponent(params.writer); // 日本語のWriterをデコード
  return <HomeScreen writer={params.writer} />;
}
