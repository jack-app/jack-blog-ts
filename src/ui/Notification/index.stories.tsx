import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from './';

type T = typeof Notification

export default {
  component: Notification,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    title: "サイト移転のお知らせ",
    description: "jack-webは下記のアドレスに移動しました",
    link: "www.jackun???.com"
  }
};