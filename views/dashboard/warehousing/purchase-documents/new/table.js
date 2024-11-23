"use client";
import { useState } from "react";
// components
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Edit3, MoreVertical, Trash2Icon } from "lucide-react";
// views
// import DeletePurchaseDocumentDialog from "./delete";

const initialDeleteData = { open: false, id: null };

export default function TableAddPurchaseDocument({ data = { results: [] } }) {
  const [openDeletePurchaseDocument, setOpenDeletePurchaseDocument] = useState(initialDeleteData);

  return (
    <>
      <DataTable
        columns={[
          { header: "#", cell: ({ row: { index } }) => index + 1 },
          {
            accessorKey: "barcode",
            header: "بارکد",
          },
          {
            accessorKey: "product_code",
            header: "کد کالا",
          },
          {
            accessorKey: "latin_name",
            header: "نام لاتین",
          },
          {
            accessorKey: "count",
            header: "تعداد",
          },
          {
            accessorKey: "total_price",
            header: "قیمت کل",
          },
          {
            accessorKey: "discount_price",
            header: "تخفیف خرید",
          },
          {
            accessorKey: "warehouse",
            header: "انبار",
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
            accessorKey: "sell_price_without_tax",
            header: "فی فروش بدون مالیات",
          },
          {
            accessorKey: "profit",
            header: "سود (ریال)",
          },
          {
            accessorKey: "profit_percentage",
            header: "سود (درصد)",
          },
          {
            accessorKey: "refundable",
            header: "مرجوعی",
          },
          {
            accessorKey: "tax",
            header: "مالیات",
          },
          {
            header: "اقدامات",
            cell: ({ row: { original } }) => (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <MoreVertical width={18} height={18} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => setOpenDeletePurchaseDocument({ open: true, id: original.id })}
                    className="text-destructive"
                  >
                    <Trash2Icon />
                    حذف
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          },
        ]}
        data={data}
        pagination={false}
      />
      {/* <DeletePurchaseDocumentDialog
        open={openDeletePurchaseDocument.open}
        id={openDeletePurchaseDocument.id}
        setOpen={() => setOpenDeletePurchaseDocument(initialDeleteData)}
      /> */}
    </>
  );
}
