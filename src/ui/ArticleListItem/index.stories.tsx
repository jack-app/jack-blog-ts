import type { Meta, StoryObj } from "@storybook/react";
import { ArticleListItem } from "./";

type T = typeof ArticleListItem;

export default {
  component: ArticleListItem,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
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
};
