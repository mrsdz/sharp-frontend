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
// api
import getSellersApi from "@/api/dashboard/sellers/get";
// constants
import { customerType } from "@/constants/customer-type";

export default function SellerSearch({ onChange, value, setState }) {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const debouncedSearch = useDebounce((data) => getSellersFunc(data), 300);

  async function getSellersFunc(data = "") {
    setLoading(true);
    const res = await getSellersApi({ id, search: data });
    setData(res.results);
    setLoading(false);
  }

  useEffect(() => {
    if (!data.length) getSellersFunc();
  }, []);

  return (
    <>
      <CommandInput
        onValueChange={(value) => debouncedSearch(value)}
        placeholder="برای جستجو، اینجا تایپ کنید..."
      />
      <CommandList>
        <CommandEmpty>{loading ? "جستجو..." : "فروشنده یافت نشد"}</CommandEmpty>

        <CommandGroup>
          {data.length
            ? data.map((seller) => (
                <CommandItem
                  key={seller.id}
                  value={seller.id}
                  onSelect={() => {
                    onChange(seller);
                    setState(false);
                  }}
                >
                  {seller.company_name} ({customerType[seller.customer_type]})
                  <Check
                    className={cn(
                      "mr-auto h-4 w-4",
                      value.id == seller.id ? "opacity-100" : "opacity-0"
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
