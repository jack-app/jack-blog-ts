import { ArticleDetailScreen } from "@/screens/detail";

export default function Page({ params }: { params: { id: string } }) {
  return <ArticleDetailScreen id={params.id} />;
}
