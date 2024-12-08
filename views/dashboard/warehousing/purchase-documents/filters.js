"use client";
import useDebounce from "@/hooks/use-debounce";
// components
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function FilterPurchaseDocument({
  searchValue = "",
  supplierType = "both",
  refetchData,
}) {
  const debouncedSearch = useDebounce((data) => refetchData({ search: data }), 300);

  return (
    <div className="flex items-center gap-4 mb-4">
      <Input
        placeholder="جستجو اسناد خرید..."
        className="w-fit"
        defaultValue={searchValue}
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      <div className="w-[1px] h-6 bg-neutral-200 mx-2 hidden md:block" />
      <RadioGroup
        defaultValue={supplierType}
        onValueChange={(value) => refetchData({ supplierType: value })}
      >
        <div className="flex items-center space-x-2 gap-2">
          <div className="flex items-center gap-1">
            <Label htmlFor="COMPANY">سند خرید</Label>
            <RadioGroupItem value="COMPANY" id="active" />
          </div>
          <div className="flex items-center gap-1">
            <Label htmlFor="PERSON">مبادلات دارویی</Label>
            <RadioGroupItem value="PERSON" id="deactivate" />
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
