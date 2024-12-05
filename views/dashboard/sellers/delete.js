import { useParams } from "next/navigation";
import { useTransition } from "react";
// api
import deleteSellerApi from "@/api/dashboard/sellers/delete";
// components
import ConfirmDialog from "@/components/confirm-dialog";

export default function DeleteSellerDialog({ open, id, setOpen }) {
  const { id: storeId } = useParams();
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      try {
        const result = await deleteSellerApi({ storeId, sellerId: id });

        if (result?.status === 204) setOpen();
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <ConfirmDialog
      name="فروشنده"
      open={open}
      setOpen={setOpen}
      onConfirm={handleDelete}
      loading={isPending}
    />
  );
}
