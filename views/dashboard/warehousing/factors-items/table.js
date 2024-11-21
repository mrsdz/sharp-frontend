// "use client";
// components
import { DataTable } from "@/components/data-table";

export default function TableFactorsItems({
  data = { results: [], current_page: 1 },
  refetchData,
}) {
  return (
    <DataTable
      columns={[
        { header: "#", cell: ({ row: { index } }) => index + 1 },
        {
          accessorKey: "product_code",
          header: "کد کالا",
        },
        {
          accessorKey: "display_name",
          header: "نام به فارسی",
        },
        {
          accessorKey: "counts",
          header: "تعداد",
        },
        {
          accessorKey: "prize",
          header: "جایزه",
        },
        {
          accessorKey: "refunded_counts",
          header: "مرجوعی",
        },
        {
          accessorKey: "total_amount",
          header: "قيمت كل",
        },
        {
          accessorKey: "discount_amount",
          header: "تخفيف",
        },
      ]}
      data={data}
      refetchData={refetchData}
    />
  );
}
