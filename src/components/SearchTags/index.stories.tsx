import type { Meta, StoryObj } from "@storybook/react";
import { SearchTags } from "./";

type T = typeof SearchTags;

export default {
  component: SearchTags,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    tags: [
      {
        id: "1",
        name: "frontend",
        color: "default",
      },
      {
        id: "2",
        name: "Next.js",
        color: "blue",
      },
      {
        id: "3",
        name: "tailwind",
        color: "green",
      },
      {
        id: "4",
        name: "backend",
        color: "brown",
      },
      {
        id: "5",
        name: "Go",
        color: "blue",
      },
      {
        id: "6",
        name: "Rust",
        color: "orange",
      },
      {
        id: "7",
        name: "Docker",
        color: "blue",
      },
      {
        id: "8",
        name: "Kubernetes",
        color: "red",
      },
    ],
  },
};
