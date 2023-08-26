import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCardsPresentation } from "./presentations/";

type T = typeof ArticleCardsPresentation;

export default {
  component: ArticleCardsPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    imageUrl: "https://placehold.jp/360x240.png",
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
};
