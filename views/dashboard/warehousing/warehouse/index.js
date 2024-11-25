"use client";
// next
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// views
import FilterWarehouse from "@/views/dashboard/warehousing/warehouse/filters";
import TableWarehouse from "@/views/dashboard/warehousing/warehouse/table";

export default function ViewWarehouse({ data }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function refetchData(params) {
    const urlParams = new URLSearchParams(searchParams);

    Object.entries(params).forEach(([key, value]) => {
      urlParams.set(key, value);
    });

    router.replace(`${pathname}?${urlParams.toString()}`);
  }

  return (
    <>
      <FilterWarehouse
        refetchData={refetchData}
        searchValue={searchParams.get("search")?.toString()}
      />
      <TableWarehouse data={data} refetchData={refetchData} />
    </>
  );
}
