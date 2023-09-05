import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailHeader } from "./";

type T = typeof ArticleDetailHeader;

export default {
  component: ArticleDetailHeader,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    title: "jack-blogを支える技術",
    writerName: "jack",
    writerImage: "https://placehold.jp/360x200.png",
  },
};
