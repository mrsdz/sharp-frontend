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
import getWarehouses from "@/api/dashboard/warehousing/warehouse/get";

export default function WarehouseSearch({ onChange, value, setState }) {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const debouncedSearch = useDebounce((data) => getWarehousesFunc(data), 300);

  async function getWarehousesFunc(data = "") {
    setLoading(true);
    const res = await getWarehouses({ id, search: data });
    setData(res.results);
    setLoading(false);
  }

  useEffect(() => {
    if (!data.length) getWarehousesFunc();
  }, []);

  return (
    <>
      <CommandInput
        onValueChange={(value) => debouncedSearch(value)}
        placeholder="برای جستجو، اینجا تایپ کنید..."
      />
      <CommandList>
        <CommandEmpty>{loading ? "جستجو..." : "انباری یافت نشد"}</CommandEmpty>

        <CommandGroup>
          {data.length
            ? data.map((warehouse) => (
                <CommandItem
                  key={warehouse.id}
                  value={warehouse.id}
                  onSelect={() => {
                    onChange(warehouse);
                    setState(false);
                  }}
                >
                  {warehouse.name}

                  <Check
                    className={cn(
                      "mr-auto h-4 w-4",
                      value.id == warehouse.id ? "opacity-100" : "opacity-0"
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
