import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCardsPresentation } from "./presentations/";

type T = typeof ArticleCardsPresentation;

export default {
  component: ArticleCardsPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    imageUrl: "https://picsum.photos/100/100",
    title: "Title",
    tags: [
      {
        id: "1",
        name: "Tag1",
        color: "#000000",
      },
    ],
  },
};
