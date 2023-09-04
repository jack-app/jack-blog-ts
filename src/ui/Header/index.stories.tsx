import type { Meta, StoryObj } from "@storybook/react";
import { Header } from './';

type T = typeof Header

export default {
  component: Header,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};