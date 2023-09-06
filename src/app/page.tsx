import { HomeScreen } from "@/screens/Home";

export default function Home({ searchParams }: { searchParams: { tag: string; writer: string } }) {
  return <HomeScreen tag={searchParams.tag} writer={searchParams.writer} />;
}
