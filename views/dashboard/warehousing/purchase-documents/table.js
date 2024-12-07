"use client";
import { useState } from "react";
import { useAppStore } from "@/store/provider-store";
// next
import { useRouter } from "next/navigation";
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
import { Badge } from "@/components/ui/badge";
import { Edit3, Eye, MoreVertical, Trash2Icon } from "lucide-react";
// api
import getPurchaseDocumentItems from "@/api/dashboard/warehousing/purchase-documents/items/get-items";
// views
import DeletePurchaseDocumentDialog from "./delete";
// constants
import { EDIT_PURCHASE_DOCUMENT, DELETE_PURCHASE_DOCUMENT } from "@/constants/permissions";
// utils
import gregorianToJalali from "@/utils/gregorian-to-jalali";

const initialDeleteData = { open: false, id: null };

export default function TablePurchaseDocument({
  data = { results: [], current_page: 1 },
  refetchData,
}) {
  const router = useRouter();
  const { selectedPurchaseDocument, setSelectedPurchaseDocument } = useAppStore((state) => state);

  const [openDeletePurchaseDocument, setOpenDeletePurchaseDocument] = useState(initialDeleteData);

  const viewItems = ({ storeId, purchaseDocumentId, factorId }, callback) => {
    getPurchaseDocumentItems({ storeId, purchaseDocumentId }).then((res) => {
      setSelectedPurchaseDocument({ ...res, factor_id: factorId });
      callback?.();
    });
  };

  return (
    <>
      <DataTable
        customHeight={selectedPurchaseDocument ? "h-[200px]" : ""}
        columns={[
          { header: "#", cell: ({ row: { index } }) => index + 1 },
          {
            accessorKey: "id",
            header: "سریال سند",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "tracking_code",
            header: "کد پیگیری (شماره فاکتور)",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "date",
            header: "تاریخ",
            cell: ({ getValue }) => gregorianToJalali(getValue()) || "-",
          },
          {
            accessorKey: "total_price",
            header: "مبلغ کل",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "total_count",
            header: "جمع اقلام",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "paid_amount",
            header: "پرداخت شده",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "tax_amount",
            header: "جمع ماليات",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "total_price_with_tax",
            header: "جمع اقلام + ماليات",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "description",
            header: "توضيحات",
            cell: ({ getValue }) => getValue() || "-",
          },
          {
            accessorKey: "is_draft",
            header: "وضعيت",
            cell: ({ getValue }) =>
              getValue() ? (
                <Badge variant="warning">پیش نویس</Badge>
              ) : (
                <Badge variant="success">ثبت شده</Badge>
              ),
          },
          {
            header: "اقدامات",
            cell: ({ row: { original, toggleSelected }, table }) => (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <MoreVertical width={18} height={18} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => {
                      viewItems(
                        {
                          storeId: original.store,
                          purchaseDocumentId: original.id,
                          factorId: original.id,
                        },
                        () => toggleSelected()
                      );
                      table.toggleAllPageRowsSelected(false);
                    }}
                  >
                    <Eye />
                    مشاهده اقلام
                  </DropdownMenuItem>
                  {original.is_draft && (
                    <>
                      <HasAccessComponent
                        component={
                          <DropdownMenuItem
                            onClick={() =>
                              router.push(
                                `/dashboard/${original.store}/warehousing/purchase_documents/${original.id}`
                              )
                            }
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
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2Icon />
                            حذف
                          </DropdownMenuItem>
                        }
                        requiredPermissions={[DELETE_PURCHASE_DOCUMENT]}
                      />
                    </>
                  )}
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
    </>
  );
}
