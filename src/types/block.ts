// TODO: notion apiから取ってこれる全てのblock要素をここで定義したい。
// 参考：https://developers.notion.com/reference/block

export type Block = any;

export type RichText = {
  text?: Text;
  annotations: Annotations;
  plainText: string;
  href?: string;
  equation?: Equation;
  mention?: Mention;
};

export type Text = {
  content: string;
  link?: Link;
};

export type Link = {
  url: string;
};

export type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: Color;
};

export type Color =
  | "blue"
  | "blue_background"
  | "brown"
  | "brown_background"
  | "default"
  | "gray"
  | "gray_background"
  | "green"
  | "green_background"
  | "orange"
  | "orange_background"
  | "pink"
  | "pink_background"
  | "purple"
  | "purple_background"
  | "red"
  | "red_background"
  | "yellow"
  | "yellow_background";

export type Equation = {
  expression: string;
};

export type Mention = {
  type: string;
  page?: Reference;
};

export type Reference = {
  id: string;
};

export type Code = {
  Caption: RichText[];
  RichTexts: RichText[];
  Language: string;
};
