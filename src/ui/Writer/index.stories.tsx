import type { Meta, StoryObj } from "@storybook/react";
import { Writer } from "./";

type T = typeof Writer;

export default {
  component: Writer,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    name: "jack",
    image: "https://placehold.jp/24x24.png",
  },
};
