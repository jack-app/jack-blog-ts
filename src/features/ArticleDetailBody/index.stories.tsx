import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailBodyPresentation } from "./presentations";

type T = typeof ArticleDetailBodyPresentation;

export default {
  component: ArticleDetailBodyPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    children: <div>ArticleDetailBody</div>,
  },
};
