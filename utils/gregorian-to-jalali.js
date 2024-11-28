import { format } from "date-fns-jalali";

export default function gregorianToJalali(date) {
  return format(date, "yyyy-MM-dd");
}
