"use client";

import { useEffect, useState, useTransition } from "react";
import { useParams } from "next/navigation";
// api
import editSellerApi from "@/api/dashboard/sellers/edit";
// serializer
import serializeSellerInfo from "@/serializers/seller/info";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
import FormSeller from "./form";

export default function EditSellerDialog({ open, initialData = null, setOpen }) {
  const { id: dashboardId } = useParams();
  const [isPending, startTransition] = useTransition();

  const [errors, setError] = useState({});

  const [data, setData] = useState(initialData);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await editSellerApi(data, dashboardId);

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

  useEffect(() => setData(serializeSellerInfo(initialData)), [initialData]);

  return (
    <DrawerDialog
      maxWidthDesktop="sm:max-w-[525px]"
      title="ویرایش کاربر"
      description="لطفاً اطلاعات کاربر را تغییر دهید."
      open={open}
      setOpen={setOpen}
      footer={
        <Button loading={isPending} onClick={handleSubmit} type="submit">
          ویرایش
        </Button>
      }
    >
      <FormSeller data={data} setData={handleInput} errors={errors} isEdit={true} />
    </DrawerDialog>
  );
}
