"use client";
// next
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// views
import FilterPurchaseDocument from "@/views/dashboard/warehousing/purchase-documents/filters";
import TablePurchaseDocument from "@/views/dashboard/warehousing/purchase-documents/table";

export default function ViewPurchaseDocuments({ data }) {
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
      <FilterPurchaseDocument
        refetchData={refetchData}
        searchValue={searchParams.get("search")?.toString()}
      />
      <TablePurchaseDocument data={data} refetchData={refetchData} />
    </>
  );
}
