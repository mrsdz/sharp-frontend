"use client";

import { useState, useTransition } from "react";
import { useParams, useRouter } from "next/navigation";
// auth
import withAccess from "@/auth/with-acess";
// api
import newPurchaseDocumentApi from "@/api/dashboard/warehousing/purchase-documents/new";
// components
import { Button } from "@/components/ui/button";
import { DrawerDialog } from "@/components/drawer-dialog";
// views
import FormPurchaseDocument from "./form";
// constants
import { ADD_PURCHASE_DOCUMENT } from "@/constants/permissions";

const initialData = {
  date: "",
  description: "",
};

function NewPurchaseDocument() {
  const { id } = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [openNewPurchaseDocument, setOpenNewPurchaseDocument] = useState(false);
  const [errors, setError] = useState({});

  const [data, setData] = useState(initialData);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const result = await (data, id);

        if (result?.errors) setError(result.errors);
        else if (result.status === 201) {
          setError({});
          setOpenNewPurchaseDocument(false);
          setData(initialData);
          router.push(`/dashboard/${id}/warehousing/purchase-documents/${result.data.id}`);
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
        onClick={() => setOpenNewPurchaseDocument(!openNewPurchaseDocument)}
        size="lg"
        className="w-full md:w-auto"
      >
        افزودن
      </Button>
      <DrawerDialog
        title="افزودن سند خرید"
        description="لطفاً اطلاعات سند خرید جدید را وارد کنید."
        open={openNewPurchaseDocument}
        setOpen={setOpenNewPurchaseDocument}
        preventAutoFocus
        footer={
          <>
            <Button loading={isPending} onClick={newPurchaseDocumentApi} type="submit">
              افزودن
            </Button>
          </>
        }
      >
        <FormPurchaseDocument errors={errors} data={data} setData={handleInput} />
      </DrawerDialog>
    </>
  );
}

export default withAccess(NewPurchaseDocument, [ADD_PURCHASE_DOCUMENT]);
