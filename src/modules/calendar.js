import { startOfWeek, endOfWeek, addDays, subDays } from "date-fns";

export function takeDay(date = new Date()) {
  let _date = subDays(date, 1);

  return () => {
    _date = addDays(_date, 1);
    return _date;
  };
}

export function takeWeek(date = new Date()) {
  let _date = startOfWeek(date);

  return () => {
    const week = [];
    const g = takeDay(_date);
    let day = g();

    while (true) {
      if (day > endOfWeek(_date)) break;
      week.push(day);
      day = g();
    }

    _date = addDays(week.at(-1), 1);
    return week;
  };
}
