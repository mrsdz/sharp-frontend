export default function getFirstLetters(input) {
  return input
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);
}
