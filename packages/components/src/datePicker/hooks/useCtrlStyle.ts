import * as dateTimePicker from "../utils/dateTimePicker";
import { ICell } from "../src/datePicker";

export function useCtrlStyle() {
  //日期面板的一些样式
  const getDays = (cell: ICell) => {
    return cell.date.getDate();
  };
  const dayClass = (cell: ICell) => {
    return {
      pre: cell.status === "pre",
      next: cell.status === "next",
      // active: isSameDay(),
      beSel: cell.status === "beSel",
      today: isToday(cell.date),
    };
  };
  const isToday = (date: Date) => {
    const [y1, m1, d1] = dateTimePicker.getDateInfo(date);
    const [y2, m2, d2] = dateTimePicker.getDateInfo();
    return y1 === y2 && m1 === m2 && d1 === d2;
  };

  return {
    getDays,
    dayClass,
  };
}
