export const formatDateForAdventCalender = (date: string /* "2021-01-01" **/) => {
  const [year, month, day] = date.split("-");
  const dayWithoutZero = day.replace(/^0/, "");

  return `アドベントカレンダー${year} ${dayWithoutZero}日目`;
};
