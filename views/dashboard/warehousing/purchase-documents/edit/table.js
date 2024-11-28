"use client";
// components
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// icons
import { Trash2Icon } from "lucide-react";

export default function TableAddPurchaseDocument({
  data = { results: [] },
  onDataChange = () => {},
}) {
  const handleDataChange = (id, key, value) => {
    const newData = data.results.map((item) => (item.id === id ? { ...item, [key]: value } : item));
    onDataChange(newData);
  };

  return (
    <>
      <DataTable
        tableHeaderClassName="text-center text-xs"
        tableCellClassName="p-1 border-l border-muted text-center"
        columns={[
          {
            header: "#",
            cell: ({ row: { index } }) => index + 1,
          },
          {
            accessorKey: "barcode",
            header: "بارکد",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
                defaultValue={original.barcode}
                onBlur={(e) => handleDataChange(original.id, "barcode", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "product_code",
            header: "کد کالا",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0 "
                defaultValue={original.product_code}
                onBlur={(e) => handleDataChange(original.id, "product_code", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "latin_name",
            header: "نام لاتین",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
                defaultValue={original.latin_name}
                onBlur={(e) => handleDataChange(original.id, "latin_name", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "count",
            header: "تعداد",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
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
                className="border-none focus-visible:ring-0"
                defaultValue={original.total_price}
                onBlur={(e) => handleDataChange(original.id, "total_price", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "discount_price",
            header: "تخفیف خرید",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
                defaultValue={original.discount_price}
                onBlur={(e) => handleDataChange(original.id, "discount_price", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "warehouse",
            header: "انبار",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
                defaultValue={original.warehouse}
                onBlur={(e) => handleDataChange(original.id, "warehouse", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "buy_price",
            header: "فی خرید",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
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
                className="border-none focus-visible:ring-0"
                defaultValue={original.sell_price_with_tax}
                onBlur={(e) => handleDataChange(original.id, "sell_price_with_tax", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "sell_price_without_tax",
            header: "فی فروش بدون مالیات",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
                defaultValue={original.sell_price_without_tax}
                onBlur={(e) =>
                  handleDataChange(original.id, "sell_price_without_tax", e.target.value)
                }
              />
            ),
          },
          {
            accessorKey: "profit",
            header: "سود (ریال)",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
                defaultValue={original.profit}
                onBlur={(e) => handleDataChange(original.id, "profit", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "profit_percentage",
            header: "سود (درصد)",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
                defaultValue={original.profit_percentage}
                onBlur={(e) => handleDataChange(original.id, "profit_percentage", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "refundable",
            header: "مرجوعی",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
                defaultValue={original.refundable}
                onBlur={(e) => handleDataChange(original.id, "refundable", e.target.value)}
              />
            ),
          },
          {
            accessorKey: "tax",
            header: "مالیات",
            cell: ({ row: { original } }) => (
              <Input
                type="text"
                className="border-none focus-visible:ring-0"
                defaultValue={original.tax}
                onBlur={(e) => handleDataChange(original.id, "tax", e.target.value)}
              />
            ),
          },
          {
            header: "اقدامات",
            cell: ({ row: { original } }) => (
              <Button
                variant="ghost"
                onClick={() => onDataChange(data.results.filter((item) => item.id !== original.id))}
                size="sm"
                className="text-destructive hover:text-destructive"
              >
                <Trash2Icon />
              </Button>
            ),
          },
        ]}
        data={data}
        pagination={false}
      />
    </>
  );
}
