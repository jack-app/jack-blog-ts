import "@testing-library/jest-dom";
import { ArticleCardList } from "..";
import { waitFor, render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const setUp = (ui: React.ReactElement) => {
  return render(
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>error</div>}>{ui}</ErrorBoundary>
    </Suspense>
  );
};

jest.mock("../hooks", () => {
  return {
    useArticles: () => {
      return [
        {
          id: "1",
          imageUrl: "https://placehold.jp/360x200.png",
          title: "jack-blogを支える技術",
          tags: [
            {
              id: "1",
              name: "frontend",
              color: "default",
            },
            {
              id: "2",
              name: "Next.js",
              color: "blue",
            },
          ],
        },
        {
          id: "2",
          title: "だから僕はtailwindをやめた",
          tags: [
            {
              id: "1",
              name: "frontend",
              color: "default",
            },
            {
              id: "3",
              name: "tailwind",
              color: "green",
            },
          ],
        },
      ];
    },
  };
});

describe("ArticleCardList", () => {
  test("ArticleCardListに渡したitemsが表示されるか", async () => {
    setUp(<ArticleCardList />);

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "jack-blogを支える技術" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "だから僕はtailwindをやめた" })).toBeInTheDocument();
    });
  });
});
