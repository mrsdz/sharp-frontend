"use client";
import useDebounce from "@/hooks/use-debounce";
// components
import { Input } from "@/components/ui/input";

export default function FilterSeller({ searchValue = "", refetchData }) {
  const debouncedSearch = useDebounce((data) => refetchData({ search: data }), 300);

  return (
    <div className="flex items-center gap-4 mb-4 flex-col md:flex-row">
      <Input
        placeholder="جستجو فروشندگان..."
        className="w-full md:w-fit"
        defaultValue={searchValue}
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </div>
  );
}
