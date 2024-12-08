"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
// api
import editWarehouseApi from "@/api/dashboard/warehousing/warehouse/edit";
// serializer
import serializeWarehouseInfo from "@/serializers/warehouse/info";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
import FormWarehouse from "./form";

export default function EditWarehouseDialog({ open, initialData = null, setOpen }) {
  const pathname = usePathname();
  const dashboardId = pathname.split("/")[2];
  const [isPending, startTransition] = useTransition();

  const [errors, setError] = useState({});

  const [data, setData] = useState(initialData);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await editWarehouseApi(data, dashboardId);

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

  useEffect(() => setData(serializeWarehouseInfo(initialData)), [initialData]);

  return (
    <DrawerDialog
      title="ویرایش انبار"
      description="لطفاً اطلاعات انبار را تغییر دهید."
      open={open}
      setOpen={setOpen}
      footer={
        <Button loading={isPending} onClick={handleSubmit} type="submit">
          ویرایش
        </Button>
      }
    >
      <FormWarehouse data={data} setData={handleInput} errors={errors} isEdit={true} />
    </DrawerDialog>
  );
}
