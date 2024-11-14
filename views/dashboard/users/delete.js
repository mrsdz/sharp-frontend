import { useParams } from "next/navigation";
import { useTransition } from "react";
// api
import deleteUserApi from "@/api/dashboard/store/staff/delete";
// components
import ConfirmDialog from "@/components/confirm-dialog";

export default function DeleteUserDialog({ open, id, setOpen }) {
  const { id: storeId } = useParams();
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      try {
        const result = await deleteUserApi({ storeId, userId: id });

        if (result?.status === 204) setOpen();
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <ConfirmDialog
      name="کاربر"
      open={open}
      setOpen={setOpen}
      onConfirm={handleDelete}
      loading={isPending}
    />
  );
}
