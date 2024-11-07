import { DrawerDialog } from "./drawer-dialog";
import { Button } from "./ui/button";

export default function ConfirmDialog({
  name,
  open,
  setOpen,
  onConfirm = () => null,
  loading = false,
}) {
  return (
    <DrawerDialog
      open={open}
      setOpen={setOpen}
      title={`حذف ${name}`}
      footer={
        <Button loading={loading} onClick={onConfirm} variant="destructive">
          حذف
        </Button>
      }
    >
      <p className="text-muted-foreground text-sm">
        آیا از حذف این {name} مطمئن هستید؟ این عملیات قابل بازگشت نیست.
      </p>
    </DrawerDialog>
  );
}
