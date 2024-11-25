"use client";

import { useState } from "react";
import { PlusCircle, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";

// serializers
import serializeSelectOptions from "@/serializers/multi-select";

export default function MultiTagSelect({
  options = [],
  placeholder = "انتخاب کنید",
  searchPlaceholder = "کلمه مورد نظر را جستجو کنید",
  values = [],
  setValues = () => null,
}) {
  const [open, setOpen] = useState(false);

  function renderBadges() {
    if (!values.length) return null;

    return values.length <= 2 ? (
      values.map((item) => (
        <Badge key={item.label} variant="secondary">
          {item.label}
        </Badge>
      ))
    ) : (
      <Badge variant="secondary">{values.length} مورد انتخاب شده</Badge>
    );
  }

  function handleSelect(currentValue) {
    const selectedOption = serializeSelectOptions(
      options.find((item) => item.value === currentValue)
    );
    const isSelected = values.some((option) => option.value === selectedOption.value);

    setValues(
      isSelected
        ? values.filter((option) => option.value !== selectedOption.value)
        : [...values, selectedOption]
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outlined"
          role="combobox"
          aria-expanded={open}
          className="w-fit h-9 gap-2 border border-input border-dashed hover:bg-accent"
        >
          <PlusCircle width={16} height={16} className="text-muted-foreground" />
          <span className="text-muted-foreground mt-0.5">{placeholder}</span>
          {!!values.length && (
            <Minus width={16} height={16} className="text-muted-foreground rotate-90" />
          )}
          {renderBadges()}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0 w-full">
        <Command
          filter={(value, search) => {
            const option = options.find((opt) => opt.label === value);
            return option?.label?.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
          }}
          align="right"
        >
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>اطلاعاتی یافت نشد</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  className="cursor-pointer"
                  key={opt.value}
                  value={opt.value}
                  onSelect={() => handleSelect(opt.value)}
                >
                  <div className="flex items-center gap-2 pl-2">
                    <Checkbox checked={values.some((item) => item.value === opt.value)} />
                    {opt.icon && <span>{opt.icon}</span>}
                    <span className="pt-0.5">{opt.label}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          {!!values.length && (
            <>
              <CommandSeparator />
              <div className="p-1">
                <Button
                  onClick={() => setValues([])}
                  className="w-full text-muted-foreground"
                  size="sm"
                  variant="ghost"
                >
                  حذف فیلترها
                </Button>
              </div>
            </>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
