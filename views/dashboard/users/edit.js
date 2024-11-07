"use client";

import { useState, useTransition } from "react";
// api
import editUserApi from "@/api/dashboard/users/edit";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
import FormUser from "./form";

const initialData = {
  display_name: "",
  group: "",
  username: "",
};

export default function EditUserDialog({ open, setOpen }) {
  const [isPending, startTransition] = useTransition();

  const [errors, setError] = useState({});

  const [data, setData] = useState(initialData);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await editUserApi(data);

        if (result?.errors) setError(result.errors);
        else if (result.status === 204) {
          setError({});
          setOpen(false);
          setData(initialData);
        }
      } catch ({ status, response }) {
        console.log(status, response);
      }
    });
  }

  function handleInput(name, value) {
    setData({ ...data, [name]: value });
    setError({ ...errors, [name]: null });
  }

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
      <FormUser data={data} setData={handleInput} errors={errors} />
    </DrawerDialog>
  );
}
