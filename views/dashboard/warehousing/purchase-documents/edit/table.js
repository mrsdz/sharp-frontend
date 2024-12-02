"use client";
import deletePurchaseDocumentItem from "@/api/dashboard/warehousing/purchase-documents/items/delete";
// components
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
// icons
import { Trash2Icon } from "lucide-react";

export default function TableAddPurchaseDocument({ data, handleDataChange }) {
  return (
    <>
      <DataTable
        tableHeaderClassName="text-center text-xs"
        tableCellClassName="p-1 border-l border-border text-center"
        columns={[
          {
            header: "#",
            cell: ({ row: { index } }) => index + 1,
          },
          {
            accessorKey: "generic_code",
            header: "بارکد",
            cell: ({ row: { original } }) => original.item.generic_code,
          },
          {
            accessorKey: "gtin",
            header: "کد کالا",
            cell: ({ row: { original } }) => original.item.gtin,
          },
          {
            accessorKey: "latin_name",
            header: "نام لاتین",
            cell: ({ row: { original } }) => original.item.latin_name,
          },
          {
            accessorKey: "count",
            header: "تعداد",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.count}
                onBlur={(e) => handleDataChange(original.id, "count", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "total_price",
            header: "قیمت کل",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.total_price}
                onBlur={(e) => handleDataChange(original.id, "total_price", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "discount",
            header: "تخفیف خرید",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.discount}
                onBlur={(e) => handleDataChange(original.id, "discount", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "section",
            header: "انبار",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.section}
                onBlur={(e) => handleDataChange(original.id, "section", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "buy_price",
            header: "فی خرید",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.buy_price}
                onBlur={(e) => handleDataChange(original.id, "buy_price", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "sell_price_with_tax",
            header: "فی فروش با مالیات",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.sell_price_with_tax}
                onBlur={(e) => handleDataChange(original.id, "sell_price_with_tax", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "sell_price",
            header: "فی فروش بدون مالیات",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.sell_price}
                onBlur={(e) => handleDataChange(original.id, "sell_price", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "profit_in_price",
            header: "سود (ریال)",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.profit_in_price}
                onBlur={(e) => handleDataChange(original.id, "profit_in_price", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "profit_in_percent",
            header: "سود (درصد)",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.profit_in_percent}
                onBlur={(e) => handleDataChange(original.id, "profit_in_percent", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "return_count",
            header: "مرجوعی",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 px-1 text-center"
                defaultValue={original.return_count}
                onBlur={(e) => handleDataChange(original.id, "return_count", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "tax_included",
            header: "مالیات",
            cell: ({ row: { original } }) => (
              <Checkbox
                checked={original.tax_included}
                onCheckedChange={(e) => handleDataChange(original.id, "tax_included", e)}
              />
            ),
          },
          {
            header: "اقدامات",
            cell: ({ row: { original } }) => (
              <Button
                variant="ghost"
                onClick={() =>
                  deletePurchaseDocumentItem({ storeId, purchaseDocumentId, itemId: original.id })
                }
                size="sm"
                className="text-destructive hover:text-destructive"
              >
                <Trash2Icon />
              </Button>
            ),
          },
        ]}
        data={{ results: data }}
        pagination={false}
      />
    </>
  );
}
