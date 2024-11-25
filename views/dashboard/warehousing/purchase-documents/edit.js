"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
// api
import editPurchaseDocumentApi from "@/api/dashboard/warehousing/purchase-documents/edit";
// serializer
import serializePurchaseDocumentInfo from "@/serializers/purchase-document-info";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
import FormUser from "./form";

export default function EditPurchaseDocumentDialog({ open, initialData = null, setOpen }) {
  const pathname = usePathname();
  const dashboardId = pathname.split("/")[2];
  const [isPending, startTransition] = useTransition();

  const [errors, setError] = useState({});

  const [data, setData] = useState(initialData);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await editPurchaseDocumentApi(data, dashboardId);

        if (result?.errors) setError(result.errors);
        else if (result.status === 200) {
          setError({});
          setOpen();
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  function handleInput(name, value) {
    setData({ ...data, [name]: value });
    setError({ ...errors, [name]: null });
  }

  useEffect(() => setData(serializePurchaseDocumentInfo(initialData)), [initialData]);

  return (
    <DrawerDialog
      title="ویرایش اسناد خرید"
      description="لطفاً اطلاعات اسناد خرید را تغییر دهید."
      open={open}
      setOpen={setOpen}
      footer={
        <Button loading={isPending} onClick={handleSubmit} type="submit">
          ویرایش
        </Button>
      }
    >
      <FormUser data={data} setData={handleInput} errors={errors} isEdit={true} />
    </DrawerDialog>
  );
}
