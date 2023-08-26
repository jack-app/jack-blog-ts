import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCardsPresentation } from './presentations/';

type T = typeof ArticleCardsPresentation

export default {
  component: ArticleCardsPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};