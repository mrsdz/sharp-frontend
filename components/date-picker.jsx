"use client";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "@hassanmojab/react-modern-calendar-datepicker";

export default function CustomDatePicker({ selectedDay, setSelectedDay, placeholder, ...props }) {
  return (
    <DatePicker
      locale="fa"
      value={selectedDay}
      onChange={setSelectedDay}
      inputPlaceholder={placeholder}
      shouldHighlightWeekends
      minimumDate={{ day: 1, month: 1, year: 1360 }}
      maximumDate={utils("fa").getToday()}
      inputClassName="!flex !h-9 !w-full !rounded-md !border !border-input !bg-transparent !px-3 !py-1 !text-sm !transition-colors !placeholder:text-muted-foreground !focus-visible:outline-none !focus-visible:ring-1 !focus-visible:ring-ring !disabled:cursor-not-allowed !disabled:opacity-50 !text-right cursor-pointer"
      wrapperClassName="block w-full"
      colorPrimary="#2563eb"
      {...props}
    />
  );
}
