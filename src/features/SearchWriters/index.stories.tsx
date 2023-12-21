import { SearchWritersPresentation } from "./presentations/";
import type { Meta, StoryObj } from "@storybook/react";

type T = typeof SearchWritersPresentation;

export default {
  component: SearchWritersPresentation,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    writers: [
      {
        name: "潔世一",
        image: "https://placehold.jp/100x100.png",
        number: 3,
      },
      {
        name: "馬狼照英",
        image: "https://placehold.jp/10x100.png",
        number: 2,
      },
      {
        name: "千切豹馬",
        image: "https://placehold.jp/100x10.png",
        number: 1,
      },
    ],
  },
};
