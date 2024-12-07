"use client";

import { useTransition, useCallback, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
// api
import editPurchaseDocumentApi from "@/api/dashboard/warehousing/purchase-documents/edit";
import editPurchaseDocumentItem from "@/api/dashboard/warehousing/purchase-documents/items/edit";
import deletePurchaseDocumentItem from "@/api/dashboard/warehousing/purchase-documents/items/delete";
import finalizePurchaseDocumentApi from "@/api/dashboard/warehousing/purchase-documents/finalize";
// views
import Information from "@/views/dashboard/warehousing/purchase-documents/edit/information";
import Factor from "@/views/dashboard/warehousing/purchase-documents/edit/factor";
import Items from "@/views/dashboard/warehousing/purchase-documents/edit/items";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
// utils
import { isEqual } from "lodash";

export default function EditPurchaseDocument({ initialInformationData, itemsData }) {
  const router = useRouter();
  const { id: storeId, purchase_document_id: purchaseDocumentId } = useParams();

  const [informationData, setInformationData] = useState(initialInformationData);
  const [confirmDialog, setConfirmDialog] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleItemChange = useCallback(
    (id, key, value) => {
      startTransition(() => {
        editPurchaseDocumentItem({
          storeId,
          purchaseDocumentId,
          id,
          body: { [key]: value === "" ? 0 : value },
        });
      });
    },
    [storeId, purchaseDocumentId]
  );
  const handleDeleteChange = useCallback(
    (id) => {
      startTransition(() => {
        deletePurchaseDocumentItem({ storeId, purchaseDocumentId, itemId: id });
      });
    },
    [storeId, purchaseDocumentId]
  );

  const handleSetData = useCallback(
    (key, value) => {
      setInformationData((prev) => ({ ...prev, [key]: value }));
    },
    [informationData]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!isEqual(informationData, initialInformationData)) {
        startTransition(() => {
          editPurchaseDocumentApi({ data: informationData, storeId, purchaseDocumentId });
        });
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [informationData]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <Information data={informationData} setData={handleSetData} />
        <Factor informationData={informationData} itemsData={itemsData} setData={handleSetData} />
      </div>
      <Items
        data={itemsData}
        handleItemChange={handleItemChange}
        handleDeleteChange={handleDeleteChange}
      />
      <div className="flex justify-between gap-2">
        <Button onClick={() => router.back()} size="lg" variant="outline">
          بازگشت
        </Button>
        <div className="flex items-center gap-4">
          {isPending ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse duration-1000">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              در حال ذخیره پیش نویس
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              پیش نویس ذخیره شد
            </div>
          )}
          <Button onClick={() => setConfirmDialog(true)} size="lg">
            ثبت نهایی
          </Button>
        </div>
      </div>
      <DrawerDialog
        title="ثبت نهایی"
        description="آیا از ثبت نهایی این سند مطمئن هستید؟ سند پس از ثبت نهایی قابل ویرایش نمی باشد."
        open={confirmDialog}
        setOpen={() => setConfirmDialog(false)}
        footer={
          <Button
            variant="success"
            loading={isPending}
            onClick={() => finalizePurchaseDocumentApi({ storeId, purchaseDocumentId })}
            type="submit"
          >
            ثبت نهایی
          </Button>
        }
      />
    </>
  );
}
