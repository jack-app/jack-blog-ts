import type { Meta, StoryObj } from "@storybook/react";
import { SuggestArticleListPresentation } from './presentations/';

type T = typeof SuggestArticleListPresentation

export default {
  component: SuggestArticleListPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};