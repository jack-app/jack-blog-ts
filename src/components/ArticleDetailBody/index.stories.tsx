import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailBody } from './';

type T = typeof ArticleDetailBody

export default {
  component: ArticleDetailBody,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};