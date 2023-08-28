import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./";

type T = typeof Tag;

export default {
  component: Tag,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    name: "Tag",
    color: "default",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "blue",
          "brown",
          "default",
          "gray",
          "green",
          "orange",
          "pink",
          "purple",
          "red",
          "yellow",
        ],
      },
    },
  },
};

export const Button: StoryObj<T> = {
  args: {
    name: "Tag",
    color: "default",
    isButton: true,
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "blue",
          "brown",
          "default",
          "gray",
          "green",
          "orange",
          "pink",
          "purple",
          "red",
          "yellow",
        ],
      },
    },
  },
};
