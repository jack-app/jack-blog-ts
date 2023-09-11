import { ArticleDetailBodyPresentation } from "./presentations";
import type { Meta, StoryObj } from "@storybook/react";

type T = typeof ArticleDetailBodyPresentation;

export default {
  component: ArticleDetailBodyPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    children: <div>ArticleDetailBody</div>,
  },
};
