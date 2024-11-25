"use client";

import { useState, useTransition } from "react";
import { useParams } from "next/navigation";
// auth
import withAccess from "@/auth/with-acess";
// api
import newWarehouseApi from "@/api/dashboard/warehousing/warehouse/new";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
import FormWarehouse from "./form";
// constants
import { ADD_WAREHOUSE } from "@/constants/permissions";

const initialData = {
  name: "",
  description: "",
  phone: "",
  address: "",
  users: [],
  type: "",
  is_active: true,
};

function NewWarehouse() {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();

  const [openNewWarehouse, setOpenNewWarehouse] = useState(false);
  const [errors, setError] = useState({});

  const [data, setData] = useState(initialData);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await newWarehouseApi(data, id);

        if (result?.errors) setError(result.errors);
        else if (result.status === 201) {
          setError({});
          setOpenNewWarehouse(false);
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
      <Button onClick={() => setOpenNewWarehouse(!openNewWarehouse)} size="lg">
        افزودن
      </Button>
      <DrawerDialog
        maxWidthDesktop="sm:max-w-[550px]"
        title="افزودن انبار"
        description="لطفاً اطلاعات انبار جدید را وارد کنید."
        open={openNewWarehouse}
        setOpen={setOpenNewWarehouse}
        footer={
          <>
            <Button loading={isPending} onClick={handleSubmit} type="submit">
              افزودن
            </Button>
          </>
        }
      >
        <FormWarehouse data={data} setData={handleInput} errors={errors} />
      </DrawerDialog>
    </>
  );
}

export default withAccess(NewWarehouse, [ADD_WAREHOUSE]);
