"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
// api
import editUserApi from "@/api/dashboard/store/staff/edit";
// serializer
import serializeStaffInfo from "@/serializers/staff-info";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
import FormUser from "./form";

export default function EditUserDialog({ open, initialData = null, setOpen }) {
  const pathname = usePathname();
  const dashboardId = pathname.split("/")[2];
  const [isPending, startTransition] = useTransition();

  const [errors, setError] = useState({});

  const [data, setData] = useState(initialData);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await editUserApi(data, dashboardId);

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

  useEffect(() => setData(serializeStaffInfo(initialData)), [initialData]);

  return (
    <DrawerDialog
      title="ویرایش کاربر"
      description="لطفاً اطلاعات کاربر را تغییر دهید."
      open={open}
      setOpen={setOpen}
      footer={
        <>
          <Button loading={isPending} onClick={handleSubmit} type="submit">
            ویرایش
          </Button>
        </>
      }
    >
      <FormUser data={data} setData={handleInput} errors={errors} isEdit={true} />
    </DrawerDialog>
  );
}
