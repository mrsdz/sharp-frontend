"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// views
import FilterSeller from "@/views/dashboard/sellers/filters";
import TableSeller from "@/views/dashboard/sellers/table";

export default function ViewSellers({ data }) {
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
      <FilterSeller
        refetchData={refetchData}
        searchValue={searchParams.get("search")?.toString()}
        isActive={searchParams.get("isActive")?.toString()}
        group={searchParams.get("group")?.toString()}
      />
      <TableSeller data={data} refetchData={refetchData} />
    </>
  );
}
