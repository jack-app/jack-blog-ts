import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailPresentation } from './presentations/';

type T = typeof ArticleDetailPresentation

export default {
  component: ArticleDetailPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};