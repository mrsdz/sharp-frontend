import { newDate as jalaliDate } from "date-fns-jalali";
import { format } from "date-fns";

export default function jalaliToGregorian(date) {
  return format(jalaliDate(date.year, date.month - 1, date.day), "yyyy-MM-dd");
}
