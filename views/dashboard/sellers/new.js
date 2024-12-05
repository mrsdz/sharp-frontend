"use client";

import { useState, useTransition } from "react";
import { useParams } from "next/navigation";
// auth
import withAccess from "@/auth/with-acess";
// api
import newSellerApi from "@/api/dashboard/sellers/new";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
import FormSeller from "./form";
// constants
import { ADD_SELLER } from "@/constants/permissions";

const initialData = {
  is_company: false,
  type_of_exchange: "based_on_sell_price",
  company_name: "",
  customer_type: "",
  address: "",
  economic_code: "",
  national_id: "",
  phone_fax: "",
  pre_number: "",
  postal_code: "",
  visitor_name: "",
  province: null,
  city: null,
};

function NewSeller() {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();

  const [openNewSeller, setOpenNewSeller] = useState(false);
  const [errors, setError] = useState({});

  const [data, setData] = useState(initialData);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await newSellerApi(data, id);

        if (result?.errors) setError(result.errors);
        else if (result.status === 201) {
          setError({});
          setOpenNewSeller(false);
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
      <Button
        onClick={() => setOpenNewSeller(!openNewSeller)}
        size="lg"
        className="w-full md:w-auto"
      >
        افزودن
      </Button>
      <DrawerDialog
        maxWidthDesktop="sm:max-w-[525px]"
        title="افزودن فروشنده"
        description="لطفاً اطلاعات فروشنده جدید را وارد کنید."
        open={openNewSeller}
        setOpen={setOpenNewSeller}
        footer={
          <>
            <Button loading={isPending} onClick={handleSubmit} type="submit">
              افزودن
            </Button>
          </>
        }
      >
        <FormSeller data={data} setData={handleInput} errors={errors} />
      </DrawerDialog>
    </>
  );
}

export default withAccess(NewSeller, [ADD_SELLER]);
