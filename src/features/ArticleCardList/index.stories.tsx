import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCardListPresentation } from "./presentations";

type T = typeof ArticleCardListPresentation;

export default {
  component: ArticleCardListPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    items: [
      {
        id: "1",
        imageUrl: "https://placehold.jp/360x200.png",
        title: "Title",
        tags: [
          {
            id: "1",
            name: "frontend",
            color: "#000000",
          },
          {
            id: "2",
            name: "Next.js",
            color: "#000000",
          },
        ],
      },
    ],
  },
};
