"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// views
import FilterUser from "@/views/dashboard/users/filters";
import TableUser from "@/views/dashboard/users/table";

export default function ViewUsers({ data }) {
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
      <FilterUser
        refetchData={refetchData}
        searchValue={searchParams.get("search")?.toString()}
        isActive={searchParams.get("isActive")?.toString()}
        group={searchParams.get("group")?.toString()}
      />
      <TableUser data={data} refetchData={refetchData} />
    </>
  );
}
