import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from './';

type T = typeof Tag

export default {
  component: Tag,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};