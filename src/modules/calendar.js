import {
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  addDays,
  addMonths,
  subDays,
  isAfter,
} from "date-fns";

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
      if (isAfter(day, endOfWeek(_date))) break;
      week.push(day);
      day = g();
    }

    _date = addDays(week.at(-1), 1);
    return week;
  };
}

export function takeMonth(date = new Date()) {
  let _date = startOfWeek(startOfMonth(date));

  return () => {
    const month = [];
    const g = takeWeek(_date);
    let week = g();

    while (true) {
      if (isAfter(week.at(-1), endOfMonth(date))) break;
      month.push(week);
      week = g();
    }

    _date = addMonths(month.at(-1), 1);
    return month;
  };
}
