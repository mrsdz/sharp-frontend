"use client";
import { useState } from "react";
import { useAppStore } from "@/store/provider-store";
// components
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import HasAccessComponent from "@/components/has-access-component";
import { Edit3, MoreVertical, Trash2Icon } from "lucide-react";
// views
import EditPurchaseDocumentDialog from "./edit";
import DeletePurchaseDocumentDialog from "./delete";
// constants
import { EDIT_PURCHASE_DOCUMENT, DELETE_PURCHASE_DOCUMENT } from "@/constants/permissions";

const initialDeleteData = { open: false, id: null };
const initialEditData = {
  open: false,
  data: {},
};

export default function TablePurchaseDocument({
  data = { results: [], current_page: 1 },
  refetchData,
}) {
  const { selectedPurchaseDocument, setSelectedPurchaseDocument } = useAppStore((state) => state);

  const [openDeletePurchaseDocument, setOpenDeletePurchaseDocument] = useState(initialDeleteData);
  const [openEditPurchaseDocument, setOpenEditPurchaseDocument] = useState(initialEditData);

  return (
    <>
      <DataTable
        customHeight={selectedPurchaseDocument ? "h-[200px]" : ""}
        onRowClick={({ id }) => setSelectedPurchaseDocument(id)}
        columns={[
          { header: "#", cell: ({ row: { index } }) => index + 1 },
          {
            accessorKey: "serial_number",
            header: "سریال سند",
          },
          {
            accessorKey: "tracking_code",
            header: "کد پیگیری (شماره فاکتور)",
          },
          {
            accessorKey: "date",
            header: "تاریخ",
          },
          {
            accessorKey: "total_price",
            header: "مبلغ کل",
          },
          {
            accessorKey: "total_count",
            header: "جمع اقلام",
          },
          {
            accessorKey: "paid_amount",
            header: "پرداخت شده",
          },
          {
            accessorKey: "tax_amount",
            header: "جمع ماليات",
          },
          {
            accessorKey: "total_price_with_tax",
            header: "جمع اقلام + ماليات",
          },
          {
            accessorKey: "description",
            header: "توضيحات",
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
                  <HasAccessComponent
                    component={
                      <DropdownMenuItem
                        onClick={() => setOpenEditPurchaseDocument({ open: true, data: original })}
                      >
                        <Edit3 />
                        ویرایش
                      </DropdownMenuItem>
                    }
                    requiredPermissions={[EDIT_PURCHASE_DOCUMENT]}
                  />
                  <HasAccessComponent
                    component={
                      <DropdownMenuItem
                        onClick={() =>
                          setOpenDeletePurchaseDocument({ open: true, id: original.id })
                        }
                        className="text-destructive"
                      >
                        <Trash2Icon />
                        حذف
                      </DropdownMenuItem>
                    }
                    requiredPermissions={[DELETE_PURCHASE_DOCUMENT]}
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          },
        ]}
        data={data}
        refetchData={refetchData}
      />
      <DeletePurchaseDocumentDialog
        open={openDeletePurchaseDocument.open}
        id={openDeletePurchaseDocument.id}
        setOpen={() => setOpenDeletePurchaseDocument(initialDeleteData)}
      />
      <EditPurchaseDocumentDialog
        open={openEditPurchaseDocument.open}
        initialData={openEditPurchaseDocument.data}
        setOpen={() => setOpenEditPurchaseDocument(initialEditData)}
      />
    </>
  );
}
