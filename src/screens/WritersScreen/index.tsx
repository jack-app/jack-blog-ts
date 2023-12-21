import { WriterList } from "@/features/WriterList";

export const WritersScreen: React.FC = async () => {
  return (
    <main className="mx-auto my-70 flex max-w-5xl flex-col gap-60 px-40 md:my-90 md:gap-80">
      <h1>作者一覧</h1>
      <WriterList />
    </main>
  );
};
