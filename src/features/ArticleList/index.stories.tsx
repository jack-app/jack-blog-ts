import type { Meta, StoryObj } from "@storybook/react";
import { ArticleListPresentation } from "./presentations/";

type T = typeof ArticleListPresentation;

export default {
  component: ArticleListPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    articles: [
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
      {
        id: "3",
        imageUrl: "https://placehold.jp/360x200.png",
        title: "Ginでジントニックを作る",
        tags: [
          {
            id: "4",
            name: "backend",
            color: "brown",
          },
          {
            id: "5",
            name: "Go",
            color: "blue",
          },
        ],
      },
      {
        id: "4",
        imageUrl: "https://placehold.jp/360x200.png",
        title: "飲んで学ぶ飲酒駆動開発 〜DDDを原点から学ぶ〜",
        tags: [
          {
            id: "4",
            name: "backend",
            color: "brown",
          },
          {
            id: "6",
            name: "DDD",
            color: "purple",
          },
        ],
      },
    ],
  },
};
