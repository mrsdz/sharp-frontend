import { useState } from "react";
import { ChevronDown } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
import { Command } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import StaffSearch from "@/components/staff-search";

// make this components multi and single

export default function StaffAutocomplete({
  placeholder = "select_user",
  onChange = () => null,
  value = "",
  popupWidth = "w-[371px]",
  size,
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-full justify-between min-w-[180px] ${size === "small" ? "h-10" : "h-12"}`}
        >
          {value.length ? (
            value.map(
              (item, index) => `${item.display_name}${index !== value.length - 1 ? "، " : ""}`
            )
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}

          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-full">
        <Command className={popupWidth} shouldFilter={false}>
          <StaffSearch onChange={onChange} value={value} setState={setOpen} />
        </Command>
      </PopoverContent>
    </Popover>
  );
}
