"use client";

import { useState, useTransition } from "react";
import { useParams } from "next/navigation";
// api
import newUserApi from "@/api/dashboard/store/staff/new";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
import FormUser from "./form";

const initialData = {
  display_name: "",
  group: "",
  username: "",
};

export default function NewUser() {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();

  const [openNewUser, setOpenNewUser] = useState(false);
  const [errors, setError] = useState({});

  const [data, setData] = useState(initialData);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await newUserApi(data, id);

        if (result?.errors) setError(result.errors);
        else if (result.status === 201) {
          setError({});
          setOpenNewUser(false);
          setData(initialData);
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

  return (
    <>
      <Button onClick={() => setOpenNewUser(!openNewUser)} size="lg">
        افزودن
      </Button>
      <DrawerDialog
        title="افزودن کاربر"
        description="لطفاً اطلاعات کاربر جدید را وارد کنید."
        open={openNewUser}
        setOpen={setOpenNewUser}
        footer={
          <>
            <Button loading={isPending} onClick={handleSubmit} type="submit">
              افزودن
            </Button>
          </>
        }
      >
        <FormUser data={data} setData={handleInput} errors={errors} />
      </DrawerDialog>
    </>
  );
}
