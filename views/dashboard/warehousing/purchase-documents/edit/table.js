"use client";
// components
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WarehouseAutoComplete from "@/components/warehouse-autocomplete";

// icons
import { Trash2Icon } from "lucide-react";

const EditableCell = ({ value, onBlur }) => (
  <Input
    type="text"
    className="border-none focus-visible:ring-0 px-1 text-center"
    maxLength={10}
    defaultValue={value}
    onBlur={(e) => onBlur(e.target.value)}
  />
);

export default function TableAddPurchaseDocument({ data, handleItemChange, handleDeleteChange }) {
  return (
    <DataTable
      tableHeaderClassName="text-center text-xs"
      tableCellClassName="p-1 border-l border-border text-center"
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
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "count", value)}
              value={original.count}
            />
          ),
        },
        {
          accessorKey: "gift_count",
          header: "جایزه",
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "gift_count", value)}
              value={original.gift_count}
            />
          ),
        },
        {
          accessorKey: "total_price",
          header: "قیمت کل",
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "total_price", value)}
              value={original.total_price}
            />
          ),
        },
        {
          accessorKey: "discount",
          header: "تخفیف خرید",
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "discount", value)}
              value={original.discount}
            />
          ),
        },
        {
          accessorKey: "section",
          header: "انبار",
          cell: ({ row: { original } }) => (
            <WarehouseAutoComplete
              name="section"
              id="section"
              placeholder="انبار را وارد کنید"
              value={original.section}
              onChange={(value) => handleItemChange(original.id, "section", value?.id || null)}
              popupWidth="w-[196px]"
              size="sm"
            />
          ),
        },
        {
          accessorKey: "buy_price",
          header: "فی خرید",
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "buy_price", value)}
              value={original.buy_price}
            />
          ),
        },
        {
          accessorKey: "sell_price_with_tax",
          header: "فی فروش با مالیات",
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "sell_price_with_tax", value)}
              value={original.sell_price_with_tax}
            />
          ),
        },
        {
          accessorKey: "sell_price",
          header: "فی فروش بدون مالیات",
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "sell_price", value)}
              value={original.sell_price}
            />
          ),
        },
        {
          accessorKey: "profit_in_price",
          header: "سود (ریال)",
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "profit_in_price", value)}
              value={original.profit_in_price}
            />
          ),
        },
        {
          accessorKey: "profit_in_percent",
          header: "سود (درصد)",
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "profit_in_percent", value)}
              value={original.profit_in_percent}
            />
          ),
        },
        {
          accessorKey: "return_count",
          header: "مرجوعی",
          cell: ({ row: { original } }) => (
            <EditableCell
              onBlur={(value) => handleItemChange(original.id, "return_count", value)}
              value={original.return_count}
            />
          ),
        },
        {
          accessorKey: "tax_included",
          header: "مالیات",
          cell: ({ row: { original } }) => (
            <Checkbox
              checked={original.tax_included}
              onCheckedChange={(e) => handleItemChange(original.id, "tax_included", e)}
            />
          ),
        },
        {
          header: "اقدامات",
          cell: ({ row: { original } }) => (
            <Button
              variant="ghost"
              onClick={() => handleDeleteChange(original.id)}
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
  );
}
