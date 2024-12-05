import { useState } from "react";
import { ChevronDown } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
import { Command } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import WarehouseSearch from "@/components/warehouse-autocomplete/search";

export default function WarehouseAutoComplete({
  placeholder = "select_user",
  onChange = () => null,
  value = "",
  popupWidth = "w-[371px]",
  error = null,
  size = "default",
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
            size={size}
          >
            {value ? value.name : <span className="text-muted-foreground">{placeholder}</span>}

            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-full">
          <Command className={popupWidth} shouldFilter={false}>
            <WarehouseSearch onChange={onChange} value={value} setState={setOpen} />
          </Command>
        </PopoverContent>
      </Popover>
      {error && <p className="text-red-500 text-xs mt-0.5">{error}</p>}
    </>
  );
}
