"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import backgroundPatternDark from "@/assets/background-dark.png";
import backgroundPatternLight from "@/assets/background-light.png";

export default function LoginBackground() {
  const { theme, systemTheme } = useTheme();
  const [background, setBackground] = useState(null);

  useEffect(() => {
    const activeTheme = theme === "system" ? systemTheme : theme;
    setBackground(activeTheme === "dark" ? backgroundPatternDark : backgroundPatternLight);
  }, [theme, systemTheme]);

  return (
    <div className="absolute inset-0 bg-zinc-900">
      {background && <Image src={background} alt="background pattern" fill objectFit="cover" />}
    </div>
  );
}
