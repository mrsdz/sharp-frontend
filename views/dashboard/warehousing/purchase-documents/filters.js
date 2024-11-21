"use client";
import useDebounce from "@/hooks/use-debounce";
// components
import { Input } from "@/components/ui/input";

export default function FilterPurchaseDocument({ searchValue = "", refetchData }) {
  const debouncedSearch = useDebounce((data) => refetchData({ search: data }), 300);

  return (
    <div className="flex items-center gap-4 mb-4">
      <Input
        placeholder="جستجو اسناد خرید..."
        className="w-fit"
        defaultValue={searchValue}
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </div>
  );
}
