// components
import { DataTable } from "@/components/data-table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, X } from "lucide-react";

export default function TableFactorsItems({ data = { results: [] } }) {
  return (
    <DataTable
      columns={[
        {
          header: "#",
          cell: ({ row: { index } }) => index + 1,
        },
        {
          accessorKey: "latin_name",
          header: "نام لاتین",
          cell: ({ row: { original } }) => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>{original.item.latin_name}</TooltipTrigger>
                <TooltipContent>
                  <p className="mb-1 text-sm">
                    بارکد:
                    <span className="text-primary font-bold mr-1">
                      {original.item.generic_code}
                    </span>
                  </p>
                  <p className="mb-1 text-sm">
                    کد کالا:
                    <span className="text-primary font-bold mr-1">{original.item.gtin}</span>
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ),
        },
        {
          accessorKey: "count",
          header: "تعداد",
        },
        {
          accessorKey: "gift_count",
          header: "جایزه",
        },
        {
          accessorKey: "total_price",
          header: "قیمت کل",
        },
        {
          accessorKey: "discount",
          header: "تخفیف خرید",
        },
        {
          accessorKey: "section",
          header: "انبار",
          cell: ({ row: { original } }) => original.section.name,
        },
        {
          accessorKey: "buy_price",
          header: "فی خرید",
        },
        {
          accessorKey: "sell_price_with_tax",
          header: "فی فروش با مالیات",
        },
        {
          accessorKey: "sell_price",
          header: "فی فروش بدون مالیات",
        },
        {
          accessorKey: "profit_in_price",
          header: "سود (ریال)",
        },
        {
          accessorKey: "profit_in_percent",
          header: "سود (درصد)",
        },
        {
          accessorKey: "return_count",
          header: "مرجوعی",
        },
        {
          accessorKey: "tax_included",
          header: "مالیات",
          cell: ({ row: { original } }) =>
            original.tax_included ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <X className="w-4 h-4 text-destructive" />
            ),
        },
      ]}
      data={data}
      pagination={false}
    />
  );
}
