// components
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
// utils
import getFirstLetters from "@/utils/firstLetters";

export default function StoreAvatar({ image, name }) {
  return (
    <Avatar>
      {image && <AvatarImage src={image} alt={name} />}
      <AvatarFallback className="rounded-lg">{getFirstLetters(name)}</AvatarFallback>
    </Avatar>
  );
}
