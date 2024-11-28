// hooks
import { useIsMobile } from "@/hooks/use-mobile";
// components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export function DrawerDialog({
  title,
  description,
  footer,
  open,
  setOpen,
  maxWidthDesktop = "sm:max-w-[425px]",
  preventAutoFocus = false,
  children,
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader className="text-right">
            <DrawerTitle>{title}</DrawerTitle>
            {description && <DrawerDescription>{description}</DrawerDescription>}
          </DrawerHeader>
          <div className="px-4">{children}</div>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button onClick={() => setOpen(!open)} variant="outline">
                انصراف
              </Button>
            </DrawerClose>
            {footer}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={maxWidthDesktop}
        {...(preventAutoFocus && { onOpenAutoFocus: (e) => e.preventDefault() })}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button onClick={() => setOpen(!open)} variant="outline">
            انصراف
          </Button>
          {footer}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
