import { useParams } from "next/navigation";
import { useTransition } from "react";
// api
import deletePurchaseDocumentApi from "@/api/dashboard/warehousing/purchase-documents/delete";
// components
import ConfirmDialog from "@/components/confirm-dialog";

export default function DeletePurchaseDocumentDialog({ open, id, setOpen }) {
  const { id: storeId } = useParams();
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      try {
        const result = await deletePurchaseDocumentApi({ storeId, purchaseDocumentId: id });

        if (result?.status === 204) setOpen();
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <ConfirmDialog
      name="اسناد خرید"
      open={open}
      setOpen={setOpen}
      onConfirm={handleDelete}
      loading={isPending}
    />
  );
}
