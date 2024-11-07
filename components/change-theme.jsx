"use client";

import { useTheme } from "next-themes";
// icons
import { Sun, Moon, CheckCheck } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themeList = [
  { value: "light", name: "روشن" },
  { value: "dark", name: "تاریک" },
  { value: "system", name: "سیستم" },
];

export default function ChangeTheme({ fixedPosition = false }) {
  const { setTheme, theme } = useTheme();

  return (
    <div className={fixedPosition ? "absolute top-4 left-4" : ""}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {themeList.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => setTheme(item.value)}
              className="justify-between"
            >
              {item.name}
              {theme === item.value && <CheckCheck />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
