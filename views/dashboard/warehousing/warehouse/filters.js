"use client";
import useDebounce from "@/hooks/use-debounce";
// components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FilterWarehouse({ searchValue = "", isActive = "both", refetchData }) {
  const debouncedSearch = useDebounce((data) => refetchData({ search: data }), 300);

  return (
    <div className="flex items-center gap-4 mb-4">
      <Input
        placeholder="جستجو انبارها..."
        className="w-fit"
        defaultValue={searchValue}
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      <div className="w-[1px] h-6 bg-neutral-200 mx-2" />
      <RadioGroup
        defaultValue={isActive}
        onValueChange={(value) => refetchData({ isActive: value })}
      >
        <div className="flex items-center space-x-2 gap-2">
          <div className="flex items-center gap-1">
            <Label htmlFor="true">فعال</Label>
            <RadioGroupItem value="true" id="active" />
          </div>
          <div className="flex items-center gap-1">
            <Label htmlFor="false">غیر‌فعال</Label>
            <RadioGroupItem value="false" id="deactivate" />
          </div>
          <div className="flex items-center gap-1">
            <Label htmlFor="both">هردو</Label>
            <RadioGroupItem value="both" id="both" />
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}
