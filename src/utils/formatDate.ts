import { Props as TagProps } from "@/ui/Tag";

export const formatDate = (date: string /* "2021-01-01" **/, tags: TagProps[]) => {
  const isAdventCalender = tags.some((tag) => tag.name === "アドベントカレンダー");
  if (!isAdventCalender) return date;

  const [year, month, day] = date.split("-");
  const dayWithoutZero = day.replace(/^0/, "");

  return `アドベントカレンダー${year} ${dayWithoutZero}日目`;
};
