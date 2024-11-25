import { useState } from "react";
import { useParams } from "next/navigation";
import { Check } from "lucide-react";
// hooks
import useDebounce from "@/hooks/use-debounce";
// components
import { cn } from "@/lib/utils";
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import getStaffs from "@/api/dashboard/staff/get";

export default function StaffSearch({ onChange, value, setState }) {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const debouncedSearch = useDebounce(async (data) => {
    setLoading(true);
    const res = await getStaffs({ id, search: data });
    setData(res.results);
    setLoading(false);
  }, 300);

  return (
    <>
      <CommandInput
        onValueChange={(value) => debouncedSearch(value)}
        placeholder="برای جستجو، اینجا تایپ کنید..."
      />
      <CommandList>
        <CommandEmpty>{loading ? "جستجو..." : "کاربری یافت نشد"}</CommandEmpty>

        <CommandGroup>
          {data.length
            ? data.map((user) => (
                <CommandItem
                  key={user.id}
                  value={user.id}
                  onSelect={(currentValue) => {
                    const selectedObj = data.find((item) => item.display_name === currentValue);
                    onChange(value?.id === selectedObj.id ? "" : selectedObj);
                    setState(false);
                  }}
                >
                  {user.display_name}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value?.id === user.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))
            : null}
        </CommandGroup>
      </CommandList>
    </>
  );
}
