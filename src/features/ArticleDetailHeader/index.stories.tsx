import { ArticleDetailHeaderPresentation } from "./presentations/";
import type { Meta, StoryObj } from "@storybook/react";

type T = typeof ArticleDetailHeaderPresentation;

export default {
  component: ArticleDetailHeaderPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    title: "jack-blogを支える技術について",
    writerName: "じゃっくん",
    writerImage: "https://placehold.jp/360x200.png",
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

export const AdventCalendar: StoryObj<T> = {
  args: {
    title: "jack-blogを支える技術について",
    writerName: "じゃっくん",
    writerImage: "https://placehold.jp/360x200.png",
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
    publishDate: "2021-10-10",
  },
};
