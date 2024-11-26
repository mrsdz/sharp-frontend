import { useEffect, useState } from "react";
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

  const debouncedSearch = useDebounce((data) => getStaffFunc(data), 300);

  async function getStaffFunc(data = "") {
    setLoading(true);
    const res = await getStaffs({ id, search: data });
    setData(res.results);
    setLoading(false);
  }

  useEffect(() => {
    if (!data.length) getStaffFunc();
  }, []);

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
                    let selectedOption = data.find((item) => item.display_name === currentValue);
                    console.log(selectedOption);
                    const isSelected = value.some((option) => option.id === selectedOption.id);
                    if (isSelected)
                      onChange(value.filter((option) => option.id !== selectedOption.id));
                    else onChange([...value, selectedOption]);

                    setState(false);
                  }}
                >
                  {user.display_name}

                  <Check
                    className={cn(
                      "mr-auto h-4 w-4",
                      value.some((item) => item.id === user.id) ? "opacity-100" : "opacity-0"
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
