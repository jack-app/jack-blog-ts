import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailHeaderPresentation } from "./presentations/";

type T = typeof ArticleDetailHeaderPresentation;

export default {
  component: ArticleDetailHeaderPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    title: "jack-blogを支える技術",
    writerName: "jack",
    writerImage: "https://placehold.jp/360x200.png",
  },
};
