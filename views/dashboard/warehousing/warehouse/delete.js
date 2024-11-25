import { useParams } from "next/navigation";
import { useTransition } from "react";
// api
import deleteWarehouseApi from "@/api/dashboard/warehousing/warehouse/delete";
// components
import ConfirmDialog from "@/components/confirm-dialog";

export default function DeleteWarehouseDialog({ open, id, setOpen }) {
  const { id: storeId } = useParams();
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      try {
        const result = await deleteWarehouseApi({ storeId, warehouseId: id });

        if (result?.status === 204) setOpen();
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <ConfirmDialog
      name="انبار"
      open={open}
      setOpen={setOpen}
      onConfirm={handleDelete}
      loading={isPending}
    />
  );
}
