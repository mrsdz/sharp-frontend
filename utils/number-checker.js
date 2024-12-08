export default function numberChecker(value) {
  if (value === "") return 0;

  return typeof value === "string" ? value.replace(/,/g, "") : value;
}
