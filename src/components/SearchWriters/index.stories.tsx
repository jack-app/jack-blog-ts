import type { Meta, StoryObj } from "@storybook/react";
import { SearchWriters } from "./";

type T = typeof SearchWriters;

export default {
  component: SearchWriters,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    writers: [
      {
        name: "潔世一",
        image: "https://placehold.jp/100x100.png",
      },
      {
        name: "馬狼照英",
        image: "https://placehold.jp/10x100.png",
      },
      {
        name: "千切豹馬",
        image: "https://placehold.jp/100x10.png",
      },
    ],
  },
};
