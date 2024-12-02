import { useEffect, useState } from "react";
// hooks
import useDebounce from "@/hooks/use-debounce";
// components
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
// api
import getItems from "@/api/cms/get-items";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function ItemSearch({ onChange, value, setState }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const debouncedSearch = useDebounce(getStaffFunc, 300);

  async function getStaffFunc(search = "") {
    setLoading(true);
    const res = await getItems(search);
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
        <CommandEmpty>{loading ? "جستجو..." : "کالایی یافت نشد"}</CommandEmpty>

        <CommandGroup>
          {data.length
            ? data.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.id}
                  onSelect={() => {
                    onChange(item);
                    setState(false);
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div>{item.farsi_name}</div>

                    <div className="text-muted-foreground text-left" dir="ltr">
                      {item.latin_name}
                    </div>
                  </div>
                  <VisuallyHidden>{item.id}</VisuallyHidden>
                </CommandItem>
              ))
            : null}
        </CommandGroup>
      </CommandList>
    </>
  );
}
