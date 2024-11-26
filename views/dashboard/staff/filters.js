"use client";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/use-debounce";
// api
import getGroups from "@/api/cms/getGroups";
// components
import MultiTagSelect from "@/components/multi-tag-select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FilterUser({
  searchValue = "",
  isActive = "both",
  group = "",
  refetchData,
}) {
  const debouncedSearch = useDebounce((data) => refetchData({ search: data }), 300);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function get() {
      const list = await getGroups();

      setGroups(list.results);
    }

    get();
  }, []);

  return (
    <div className="flex items-center gap-4 mb-4 flex-col md:flex-row">
      <Input
        placeholder="جستجو کاربران..."
        className="w-full md:w-fit"
        defaultValue={searchValue}
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      <MultiTagSelect
        placeholder="سمت"
        options={groups.length ? groups.map((item) => ({ label: item.name, value: item.id })) : []}
        values={
          group !== ""
            ? groups
                .filter((item) => group.split(",").includes(String(item.id)))
                .map((item) => ({ label: item.name, value: item.id }))
            : []
        }
        setValues={(value) => refetchData({ group: value.map((item) => item.value).join(",") })}
      />
      <div className="w-[1px] h-6 bg-neutral-200 mx-2 hidden md:block" />
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
