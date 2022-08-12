import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  subDays,
  addDays,
  format,
} from "date-fns";

import { takeWeek } from "@/modules/calendar";

function buildMonth(date) {
  const startDate = startOfWeek(startOfMonth(date));
  const endDate = subDays(endOfWeek(endOfMonth(date)), 1);

  const g = takeWeek(date);
  return [g(), g()];
}

export default function Homepage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return JSON.stringify(buildMonth(selectedDate));
  //const month = ;

  return (
    <div className="w-full md:p-4 lg:w-1/2 mx-auto lg:mt-4">
      <div className="w-full md:rounded-[20px] lg:rounded-[40px] border sm:shadow-lg bg-white text-gray-900 p-[2px] ">
        <div className="py-3 text-center bg-[#18bfe7] text-white font-black w-full  md:rounded-t-[20px] lg:rounded-t-[40px] lg:text-[40px] sm:text-[28px]">
          {format(selectedDate, "MMMM")} {format(selectedDate, "yyyy")}
        </div>
        <div className="lg:text-[24px] sm:text-[16px] my-8 text-[#444444]">
          <div className="flex items-center w-full justify-center font-medium">
            {days.map((day) => (
              <div className="lg:w-[120px] lg:h-[120px] md:w-[90px] md:h-[90px] w-[60px] h-[60px] flex justify-center items-center">
                {day}
              </div>
            ))}
          </div>

          <div className="flex items-center w-full justify-center font-light">
            {month.map((week) => (
              <div className="flex items-center w-full justify-center font-medium">
                {week.map((day) => (
                  <div className="lg:w-[120px] lg:h-[120px] md:w-[90px] md:h-[90px] w-[60px] h-[60px] flex justify-center items-center">
                    {format(day, "dd")}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
