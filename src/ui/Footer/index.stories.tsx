import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from './';

type T = typeof Footer

export default {
  component: Footer,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};